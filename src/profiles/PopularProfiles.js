import React from "react";
import { Container } from "react-bootstrap";
import appStyles from "../../src/App.module.css";
import Asset from "../../src/components/Asset";
import { useProfileData } from "../../src/contexts/ProfileDataContext";
import Profile from "../../src/profiles/Profile";

const PopularProfiles = ({ mobile }) => {
    const { popularProfiles } = useProfileData();

    return (
        <Container
            className={`${appStyles.Content} ${mobile && "d-lg-none text-center mb-3"
                }`}
        >
            {popularProfiles.results.length ? (
                <>
                    <p>Most followed profiles.</p>
                    {mobile ? (
                        <div className="d-flex justify-content-around">
                            {popularProfiles.results.slice(0, 4).map((profile) => (
                                <Profile key={profile.id} profile={profile} mobile />
                            ))}
                        </div>
                    ) : (
                        popularProfiles.results.map((profile) => (
                            <Profile key={profile.id} profile={profile} />
                        ))
                    )}
                </>
            ) : (
                <Asset spinner />
            )}
        </Container>
    );
};

export default PopularProfiles;