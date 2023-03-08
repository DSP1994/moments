import React from 'react'
import styles from '../../src/styles/Profile.module.css'
import btnStyle from '../../src/styles/Button.module.css'
import { useCurrentUser } from '../contexts/CurrentUserContext'
import { Link } from 'react-router-dom'
import Avatar from '../components/Avatar'
import { Button } from 'react-bootstrap'

const Profile = (props) => {
    const { profile, mobile, imageSize = 55 } = props
    const { id, following_id, image, owner } = profile

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    return (
        <div
            className={`my-3 d-flex align-items-center ${mobile && 'flex-column'}`}
        >
            <div>
                <Link className='align-self-center' to={`/profiles/${id}`}>
                    <Avatar src={image} height={imageSize} />
                </Link>
            </div>
            <div className={`mx-2 ${styles.WordBreak}`}>
                <strong>{owner}</strong>
            </div>
            <div className={`text-right ${!mobile && 'ml-auto'}`}>
                {!mobile && currentUser && !is_owner && (
                    following_id ? (
                        <Button
                            className={`${btnStyle.Button} ${btnStyle.BlackOutline}`}
                            onClick={() => { }}
                        >unfollow
                        </Button>
                    ) : (
                        <Button
                            className={`${btnStyle.Button} ${btnStyle.Black}`}
                            onClick={() => { }}>
                            Follow
                        </Button>
                    )
                )}
            </div>
        </div>
    )
}

export default Profile