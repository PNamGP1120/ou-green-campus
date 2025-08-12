import { Navbar, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2 p-0">
            <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRWFZNgMu5y2sClJWszhIr4q5nUry1qOID1Q&s"
                alt="Logo"
                width="50"
                height="50"
                roundedCircle
                // className="border border-success"
            />
            <span className="fw-bold fs-5" style={{ color: '#1a1380ff' }}>
                OU <span className="text-success">Green Campus</span>
            </span>
        </Navbar.Brand>
    );
};

export default Logo;
