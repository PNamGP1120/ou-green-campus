import { Dropdown, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AvatarDropdown = () => (
    <Dropdown align="end">
        <Dropdown.Toggle as="div" style={{ cursor: 'pointer' }} className="p-0 ms-2">
            <Image
                src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/506080678_1432719111416712_583793444048519458_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ghlwQT5xIMUQ7kNvwGAPdSC&_nc_oc=AdlmN00PlV7tT8hYB822_DUT3G4MD0VBzLA5lkpBewluhToeqRBGHZ_QAJNSmAV9Sp1KzKY7XOKkCYmnXJ2noYKH&_nc_zt=23&_nc_ht=scontent.fsgn5-3.fna&_nc_gid=XG1MRmZyC8a0M2A2pRpTxg&oh=00_AfWft0aOzQXLTtwCIhwueIBuAEC_Mq8zka72WadM4UbYCA&oe=6899518D"
                width="40"
                height="40"
                roundedCircle
                className="border border-success"
            />
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/ho-so">
                <i className="bi bi-person-circle me-2 text-success"></i>Hồ sơ
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/cai-dat">
                <i className="bi bi-gear me-2 text-success"></i>Cài đặt
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item as={Link} to="/dang-xuat">
                <i className="bi bi-box-arrow-right me-2 text-success"></i>Đăng xuất
            </Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
);

export default AvatarDropdown;
