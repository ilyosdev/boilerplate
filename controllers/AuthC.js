const jwt = require('jsonwebtoken')
const User = require('../models/UserM')

exports.login = async (req, res, next) => {
    // console.log(req.body)
    try {
        const { phone } = req.body
        if (!phone) {
            return res.status(200).json({
                isOk: false,
                message: 'Telefon raqam kiritilmagan',
            })
        }

        const [userExists] = await User.query()
            .select('id', 'phone', 'first_name')
            .where('phone', '=', phone)

        const code = Math.floor(Math.random() * 90000) + 10000

        if (!userExists) {
            await User.query().insert({
                phone,
                verification_code: code,
            })
        }

        await User.query()
            .update({
                verification_code: code,
                is_verified: 0,
            })
            .where({
                phone,
            })

        return res.status(200).json({
            isOk: true,
            message: `${phone}, ushbu raqamga maxfiy kod jo'natildi.`,
        })
    } catch (error) {
        return res.status(200).json({
            isOk: false,
            message: error.message,
        })
    }
}

exports.verify = async (req, res, next) => {
    // console.log(req.body)
    const { phone, code } = req.body

    if (!phone) {
        return res.status(200).json({
            isOk: false,
            message: 'Telefon raqam kiritilmagan',
        })
    }

    if (!code) {
        return res.status(200).json({
            isOk: false,
            message: 'Maxfiy kod kiritilmagan',
        })
    }

    const [user] = await User.query()
        .select('id', 'phone', 'first_name', 'verification_code')
        .where('phone', '=', phone)

    if (Number(user.verification_code) !== code) {
        return res.status(200).json({
            isOk: false,
            message: 'Kod xato kiritildi',
        })
    }
    await User.query().update({
        verification_code: 0,
        is_verified: 1,
    })

    delete user.verification_code
    user.is_verified = 1

    const token = jwt.sign(
        {
            id: user.id,
            phone: user.phone,
        },
        process.env.TOKEN_SECRET
    )

    return res.status(200).json({
        isOk: false,
        data: {
            user,
            token,
        },
    })
}
