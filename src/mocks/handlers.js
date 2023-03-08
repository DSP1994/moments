import { rest } from "msw";

const baseURL = 'https://drf-api23.herokuapp.com/'

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json({
                "pk": 3,
                "username": "DSP.1994",
                "email": "",
                "first_name": "",
                "last_name": "",
                "profile_id": 3,
                "profile_image": "https://res.cloudinary.com/dsp1994/image/upload/v1/media/images/kal-visuals-PFC2fY9LE_g-unsplash_rclwix"
            }
            ));
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.json(200))
    })
]