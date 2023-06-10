import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Pane, Heading } from 'evergreen-ui';

const Navbar: FC = () => {
    return (
        <Pane
            display="flex"
            alignItems="center"
            padding={16}
            borderBottom="default"
            position="sticky"
            top={0}
            zIndex={1}
            backgroundColor="white"
        >
            <Heading size={600}>My App</Heading>

            <Pane flex={1} />

            <Link to="/posts" style={{ textDecoration: 'none', paddingRight: 20, color: '#000' }}>
                Posts
            </Link>
            <Link to="/profile" style={{ textDecoration: 'none', paddingRight: 20, color: '#000' }}>
                Profile
            </Link>
            <Link to="/settings" style={{ textDecoration: 'none', paddingRight: 20, color: '#000' }}>
                Settings
            </Link>
        </Pane>
    );
};

export default Navbar;
