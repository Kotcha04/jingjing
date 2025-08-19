import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme, Select, Button, Space, Row, Col, Input, Radio, Upload } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/th';
import { UserOutlined, PlusOutlined } from '@ant-design/icons'; // Changed UploadOutlined to PlusOutlined
import type { UploadProps } from 'antd/es/upload';

dayjs.locale('th');

const { Header, Content, Footer } = Layout;
const { Option } = Select;

// Menu items for Navbar, "Home" has been removed
const initialMenuItems = [
  { key: 'car-details-title', label: 'ข้อมูลรถยนต์' }, // Changed this to be a menu item
  { key: '2', label: 'ตารางการนัดหมาย' },
  { key: '3', label: 'รายการรถที่ดูแล' },
  { key: '4', label: 'ข้อมูลลูกค้าที่ดูแล' },
];

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // Set initial selected menu item to 'car-details-title' to highlight "ข้อมูลรถยนต์"
  const [currentMenuItem, setCurrentMenuItem] = useState<string>('car-details-title');
  const [carStatus, setCarStatus] = useState<string | null>(null);

  const props: UploadProps = {
    name: 'file',
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188', // Placeholder for upload action
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        console.log(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        console.log(`${info.file.name} file upload failed.`);
      }
    },
    beforeUpload: () => {
      // You can add validation here if needed
      return true;
    },
  };

  // Pre-process menu items to create the desired ReactNode for the 'label' prop
  const menuItems = initialMenuItems.map(item => {
    return {
      key: item.key,
      label: (
        // For all items, wrap the text label in a span to control spacing
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {item.label}
        </span>
      ),
      // Apply background and text color based on selection
      style: item.key === currentMenuItem ? { backgroundColor: '#f7efc7ff', color: 'black' } : { backgroundColor: '#f1d430ff', color: 'black' }
    };
  });


  return (
    <Layout>
      {/* Custom CSS styles */}
      <style>
        {`
        /* Set initial text color for all Navbar menu items */
        .ant-menu-item .ant-menu-title-content, .ant-menu-item .anticon {
          color: black !important;
          transition: color 0.3s ease;
        }

        /* Set text color on hover in Navbar */
        .ant-menu-item:hover .ant-menu-title-content, .ant-menu-item:hover .anticon {
          color: #8a7f40ff !important;
        }

        /* Set text color for selected menu item in Navbar */
        .ant-menu-item-selected .ant-menu-title-content, .ant-menu-item-selected .anticon {
          color: black !important;
        }

        /* Styles for Upload.Dragger content */
        .ant-upload.ant-upload-drag {
            border-color: #d9d9d9 !important; /* Default border color */
        }

        .ant-upload.ant-upload-drag:not(.ant-upload-disabled):hover {
            border-color: #8c8c8c !important; /* Gray border on hover */
        }

        .ant-upload.ant-upload-drag .ant-upload-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%; /* Ensure content takes full height of dragger */
        }
        /* Removed color from here, as it's an inline style directly on the icon */
        .ant-upload.ant-upload-drag .ant-upload-drag-icon {
          font-size: 32px;
          margin-bottom: 12px;
          transition: color 0.3s ease; /* Smooth transition for color change */
        }
        .ant-upload.ant-upload-drag p.ant-upload-text {
          margin: 0;
          line-height: 1.3;
          font-size: 0.9em;
          text-align: center;
          word-break: break-word;
          white-space: normal;
          color: #8c8c8c; /* Gray text color */
          transition: color 0.3s ease; /* Smooth transition for color change */
        }

        /* Hover effect for text inside dragger */
        .ant-upload.ant-upload-drag:not(.ant-upload-disabled):hover p.ant-upload-text {
            color: #595959 !important; /* Darker gray on hover */
        }

        /* Hover effect for icon inside dragger (directly target icon) */
        .ant-upload.ant-upload-drag:not(.ant-upload-disabled):hover .ant-upload-drag-icon .anticon {
            color: #333333 !important; /* Darker black on hover for the icon */
        }

        `}
      </style>
      <Header style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f1d430ff' }}>
        {/* The "ข้อมูลรถยนต์" text is now part of the Menu component */}
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[currentMenuItem]}
          onClick={(e) => setCurrentMenuItem(e.key as string)}
          items={menuItems}
          style={{ flex: 1, minWidth: 0, backgroundColor: '#f1d430ff' }}
        />
        <Space size="middle" style={{ color: 'black', fontWeight: 'bold' }}>
          <span>นายช่างยนต์ ออนไลน์</span>
          <UserOutlined style={{ fontSize: '30px', color: '#4A4A4A', background: 'white', borderRadius: '50%', padding: '5px' }} />
        </Space>
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb
          style={{ margin: '16px 0' }}
          items={[{ title: 'เพิ่มข้อมูลรถยนต์' }, { title: 'แก้ไขข้อมูลรถยนต์' }]}
        />
        <div
          style={{
            background: colorBgContainer,
            minHeight: 800,
            padding: 24,
            borderRadius: borderRadiusLG,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <div style={{ width: '100%', maxWidth: '1000px', padding: '20px' }}>
            <Row gutter={[24, 24]}>
              <Col xs={24} md={12}>
                <p style={{ color: 'black', fontSize: '1.0em', marginBottom: '5px' }}>ยี่ห้อรถยนต์</p>
                <Input placeholder="" />
              </Col>
              <Col xs={24} md={12}>
                <p style={{ color: 'black', fontSize: '1.0em', marginBottom: '5px' }}>รุ่นรถยนต์</p>
                <Select placeholder="" style={{ width: '100%' }}>
                  <Option value="1">รุ่น 1</Option>
                </Select>
              </Col>
              <Col xs={24} md={12}>
                <p style={{ color: 'black', fontSize: '1.0em', marginBottom: '5px' }}>ปีผลิต</p>
                <Input placeholder="" />
              </Col>
              <Col xs={24} md={12}>
                <p style={{ color: 'black', fontSize: '1.0em', marginBottom: '5px' }}>รายละเอียดรุ่นรถ</p>
                <Input placeholder="" />
              </Col>
              <Col xs={24} md={12}>
                <p style={{ color: 'black', fontSize: '1.0em', marginBottom: '5px' }}>ทะเบียนรถยนต์</p>
                <Input placeholder="" />
              </Col>
              <Col xs={24} md={12}>
                <p style={{ color: 'black', fontSize: '1.0em', marginBottom: '5px' }}>จังหวัดที่ทะเบียน</p>
                <Select placeholder="" style={{ width: '100%' }}>
                  <Option value="1">กรุงเทพมหานคร</Option>
                </Select>
              </Col>
              <Col xs={24} md={12}>
                <p style={{ color: 'black', fontSize: '1.0em', marginBottom: '5px' }}>เลขไมล์ปัจจุบัน</p>
                <Input placeholder="" />
              </Col>
              <Col xs={24} md={12}>
                <p style={{ color: 'black', fontSize: '1.0em', marginBottom: '5px' }}>ประเภทการใช้งาน</p>
                <Select placeholder="" style={{ width: '100%' }} />
              </Col>

              {/* Combined Col for สีรถยนต์ and อายุการใช้งาน */}
              <Col xs={24} md={12}>
                <p style={{ color: 'black', fontSize: '1.0em', marginBottom: '5px' }}>สีรถยนต์</p>
                <Input placeholder="" />
                {/* Add อายุการใช้งาน here, with appropriate top margin */}
                <p style={{ color: 'black', fontSize: '1.0em', marginBottom: '5px', marginTop: '24px' }}>อายุการใช้งาน</p>
                <Input placeholder="" />
              </Col>
              <Col xs={24} md={12}>
                <p style={{ color: 'black', fontSize: '1.0em', marginBottom: '5px' }}>รูปภาพรถยนต์</p>
                {/* Use Upload.Dragger for the larger drag-and-drop area */}
                <Upload.Dragger
                  {...props}
                  style={{
                    height: '142px', // Calculated height to span from 'สีรถยนต์' label to 'อายุการใช้งาน' input bottom
                    padding: '10px', // Adjust padding for better visual spacing within the new height
                  }}
                >
                  <p className="ant-upload-drag-icon">
                    {/* Changed to PlusOutlined icon and set inline color to black */}
                    <PlusOutlined style={{ color: 'black' }} />
                  </p>
                  <p className="ant-upload-text">
                    ลากและวางรูปภาพ หรือ คลิกเพื่ออัปโหลด
                  </p>
                </Upload.Dragger>
              </Col>
            </Row>
            
            <div style={{ marginTop: '30px' }}>
                <p style={{ color: 'black', fontSize: '1.0em', marginBottom: '10px' }}>สถานะรถยนต์</p>
                <Radio.Group onChange={(e) => setCarStatus(e.target.value)} value={carStatus}>
                    <Space size="large">
                      <Radio value="ว่าง">ว่าง</Radio>
                      <Radio value="ขายแล้ว">ขายแล้ว</Radio>
                      <Radio value="ให้เช่า">ให้เช่า</Radio>
                    </Space>
                </Radio.Group>
            </div>
          </div>
          
          <div style={{ marginTop: '40px', width: '100%', maxWidth: '1000px', textAlign: 'right' }}>
            <Button
                style={{
                  marginRight: '10px',
                  width: '100px',
                  background: 'white',
                  color: 'black',
                  borderRadius: '5px',
                  border: '1px solid #d9d9d9',
                }}
            >
                ยกเลิก
            </Button>
            <Button
                style={{
                  width: '100px',
                  background: '#f1d430ff',
                  color: 'black',
                  borderRadius: '5px',
                  border: '1px solid #d4b434',
                }}
            >
                บันทึกข้อมูล
            </Button>
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default App;