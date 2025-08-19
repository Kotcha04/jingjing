import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme, Select, Button, Space, Row, Col, Input } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/th';
// Import icons needed for the new layout and navbar
import { HomeOutlined, UserOutlined, SmileOutlined, CheckCircleOutlined } from '@ant-design/icons';

dayjs.locale('th');

const { Header, Content, Footer } = Layout;

// เมนูรายการสำหรับ Navbar พร้อมไอคอน
const items = [
  { key: '1', label: <HomeOutlined /> }, // เฉพาะไอคอนสำหรับ Home
  { key: '2', label: 'ซื้อรถยนต์' },
  { key: '3', label: 'เช่ารถยนต์' },
  { key: '4', label: 'ตรวจสภาพรถยนต์' },
  { key: '5', label: 'ประกันรถยนต์' },
  { key: '7', label: 'นัดรับรถยนต์' },
  { key: '6', label: 'ข้อมูลติดต่อ' }
];

// เพิ่ม items สำหรับ Dropdown ในส่วนเนื้อหา
const insuranceTypeItems = [
  { value: '1', label: 'แผนประกัน 1' },
  { value: '2', label: 'แผนประกัน 2' },
  { value: '3', label: 'แผนประกัน 3' },
];

const repairTypeItems = [
  { value: '1', label: 'ซ่อมอู่' }, // เปลี่ยนเป็น "ซ่อมอู่"
  { value: '2', label: 'ซ่อมศูนย์' },
];

// Component สำหรับแสดง Card แผนประกัน
type InsuranceCardProps = {
  planName: string;
  price: string;
  features: string[];
  repairType: string;
};

const InsuranceCard: React.FC<InsuranceCardProps> = ({ planName, price, features, repairType }) => {
  return (
    <div style={{
      background: 'white',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      marginBottom: '20px', // Spacing for grid layout
      border: '1px solid #ddd', // Add a subtle border
      display: 'flex', // Use flexbox for overall card layout
      flexDirection: 'column', // Arrange items in a column
      justifyContent: 'space-between', // Distribute space between items
      height: 'auto', // Adjust height automatically
      minHeight: '250px' // Ensure a minimum height for consistency
    }}>
      {/* ส่วนบนของการ์ด: ซ้ายบน (ไอคอน + ชื่อแผน) และ ขวาบน (ประเภทซ่อม + ราคา) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
        {/* ซ้ายบน: ไอคอนยิ้มและชื่อแผน */}
        <div style={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>
          <SmileOutlined style={{ fontSize: '30px', color: '#f1d430ff', marginRight: '5px' }} />
          <p style={{ color: 'black', fontWeight: 'bold', margin: 0, fontSize: '1.0em' }}>{planName}</p>
        </div>
        {/* ขวาบน: ประเภทซ่อมและราคา */}
        <div style={{ textAlign: 'right' }}>
          <p style={{ color: 'black', fontSize: '0.9em', margin: 0 }}>{repairType}</p>
          <h2 style={{ color: '#f1d430ff', fontSize: '2em', margin: '0' }}>{price}</h2>
        </div>
      </div>

      {/* ส่วนคุณสมบัติ: ขวาล่าง (เหนือบุ่ม) */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap', // Allow items to wrap to the next line
        justifyContent: 'flex-end', // Align items to the right
        gap: '10px', // Spacing between items
        marginTop: 'auto', // Push to the bottom
        marginBottom: '20px', // Spacing from buttons
        width: '100%', // Ensure it takes full width to justify content
        textAlign: 'right' // Fallback for text alignment
      }}>
        {features.map((feature, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'gray', fontSize: '0.9em' }}>
            <CheckCircleOutlined style={{ color: '#f1d430ff' }} />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* ปุ่ม รายละเอียด และ เลือกแผนนี้ */}
      <Space size="small" style={{
        width: '100%',
        justifyContent: 'center',
        padding: '5px 0'
      }}>
        <Button
          style={{
            width: '90px',
            background: 'white',
            color: 'black',
            borderRadius: '5px',
            border: '1px solid #d4b434',
            transition: 'background-color 0.3s, color 0.3s'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f7efc7ff'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'white'; }}
        >
          รายละเอียด
        </Button>
        <Button
          style={{
            width: '90px',
            background: '#f1d430ff',
            color: 'black',
            borderRadius: '5px',
            border: '1px solid #d4b434',
            transition: 'background-color 0.3s, color 0.3s'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f7efc7ff'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#f1d430ff'; }}
        >
          เลือกแผนนี้
        </Button>
      </Space>
    </div>
  );
};

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // ตั้งค่าเมนูที่เลือกเริ่มต้นเป็น '5' (ประกันรถยนต์) เพื่อให้ตรงกับเนื้อหาปัจจุบัน
  const [currentMenuItem, setCurrentMenuItem] = useState<string>('5');

  // States สำหรับ Dropdown ในส่วนเนื้อหา
  const [selectedInsuranceType, setSelectedInsuranceType] = useState<string | null>(null);
  const [selectedRepairType, setSelectedRepairType] = useState<string | null>(null);
  const [contractNumber, setContractNumber] = useState<string>('');

  return (
    <Layout>
      {/* ส่วนสไตล์ CSS กำหนดเอง */}
      <style>
        {`
        /* กำหนดสีข้อความเริ่มต้นสำหรับทุกเมนูไอเท็มใน Navbar */
        .ant-menu-item .ant-menu-title-content, .ant-menu-item .anticon {
          color: black !important; /* ทำให้สีเริ่มต้นเป็นสีดำสำหรับข้อความและไอคอน */
          transition: color 0.3s ease; /* เพิ่ม transition เพื่อความนุ่มนวล */
        }

        /* กำหนดสีข้อความเมื่อโฮเวอร์ใน Navbar */
        .ant-menu-item:hover .ant-menu-title-content, .ant-menu-item:hover .anticon {
          color: #8a7f40ff !important; /* เปลี่ยนเป็นสีที่ต้องการเมื่อโฮเวอร์สำหรับข้อความและไอคอน */
        }

        /* กำหนดสีข้อความสำหรับเมนูไอเท็มที่ถูกเลือกใน Navbar */
        .ant-menu-item-selected .ant-menu-title-content, .ant-menu-item-selected .anticon {
          color: black !important; /* ทำให้สีของเมนูที่เลือกเป็นสีดำสำหรับข้อความและไอคอน */
        }
        `}
      </style>
      <Header style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f1d430ff' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[currentMenuItem]}
          onClick={(e) => setCurrentMenuItem(e.key as string)}
          // เพิ่ม render ของ icon ลงใน label ของแต่ละ item
          items={items.map(item => ({
            key: item.key,
            label: (
              // ตรวจสอบว่าเป็น key '1' (Home) เพื่อแสดงเฉพาะไอคอน
              item.key === '1' ? item.label : (
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {item.label}
                </span>
              )
            ),
            style: item.key === currentMenuItem ? { backgroundColor: '#f7efc7ff', color: 'black' } : { backgroundColor: '#f1d430ff', color: 'black' }
          }))}
          style={{ flex: 1, minWidth: 0, backgroundColor: '#f1d430ff' }}
        />
        {/* ส่วนขวาของ Navbar ที่มีชื่อผู้ใช้และรูปโปรไฟล์ */}
        <Space size="middle" style={{ color: 'black', fontWeight: 'bold' }}>
            {/* ชื่อผู้ใช้ */}
            <span>user one</span> {/* Placeholder for user name */}
            {/* เปลี่ยนจาก <img> เป็น Ant Design UserOutlined icon */}
            <UserOutlined style={{ fontSize: '30px', color: '#4A4A4A', background: 'white', borderRadius: '50%', padding: '5px' }} />
          </Space>
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb
          style={{ margin: '16px 0' }}
          items={[{ title: 'Home' }, { title: 'ประกันรถยนต์' }]}
        />
        <div
          style={{
            background: colorBgContainer,
            minHeight: 800, // ปรับความสูงขั้นต่ำ
            padding: 24,
            borderRadius: borderRadiusLG,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start', // จัดเนื้อหาให้อยู่ด้านบน
            alignItems: 'center', // จัดเนื้อหาให้อยู่ตรงกลางแนวนอน
          }}
        >
          {/* ส่วน Filter และ Input ด้านบน */}
          <Row gutter={[16, 16]} style={{ width: '100%', maxWidth: '1000px', marginBottom: '20px' }}>
            <Col xs={24} sm={8}>
              <p style={{ color: 'black', fontSize: '1.0em', marginBottom: '5px' }}>แผนประกัน</p>
              <Select
                value={selectedInsuranceType}
                style={{ width: '100%' }}
                onChange={(value) => setSelectedInsuranceType(value)}
                options={insuranceTypeItems}
                placeholder="เลือกแผนประกัน"
              />
            </Col>
            <Col xs={24} sm={8}>
              <p style={{ color: 'black', fontSize: '1.0em', marginBottom: '5px' }}>ประเภทการซ่อม</p>
              <Select
                value={selectedRepairType}
                style={{ width: '100%' }}
                onChange={(value) => setSelectedRepairType(value)}
                options={repairTypeItems}
                placeholder="เลือกประเภทการซ่อม"
              />
            </Col>
            <Col xs={24} sm={8}>
              <p style={{ color: 'black', fontSize: '1.0em', marginBottom: '5px' }}>หมายเลขรายการซื้อรถยนต์</p>
              <Input
                value={contractNumber}
                onChange={(e) => setContractNumber(e.target.value)}
                placeholder="กรอกหมายเลขของคุน"
                style={{ width: '100%' }}
              />
            </Col>
          </Row>

          {/* Text "Band รุ่นรถยนต์ ปีผลิต > รายละเอียดรุ่น" */}
          <p style={{ width: '100%', maxWidth: '1000px', textAlign: 'left', color: 'gray', marginBottom: '30px', fontWeight: 'bold' }}>
            Band รุ่นรถยนต์ ปีผลิต &gt; รายละเอียดรุ่น
          </p>

          {/* Grid ของแผนประกัน */}
          <Row gutter={[24, 24]} justify="center" style={{ width: '100%', maxWidth: '1200px' }}>
            {/* 6 Cards */}
            {[...Array(6)].map((_, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={8} xl={8}>
                <InsuranceCard
                  planName="รู้หมดประกันภัย"
                  repairType="ชั้น 1 | ซ่อมอู่"
                  price="6,399"
                  features={['คุ้มครองน้ำท่วม', 'ไม่ระบุชื่อ']}
                />
              </Col>
            ))}
          </Row>

          {/* ข้อกำหนดและเงื่อนไข */}
          <div style={{ width: '100%', maxWidth: '1000px', textAlign: 'left', marginTop: '40px', padding: '20px', background: '#f0f2f5', borderRadius: '8px' }}>
            <h3 style={{ color: 'black', marginBottom: '10px' }}>ข้อกำหนดและเงื่อนไข</h3>
            <p style={{ color: 'gray', fontSize: '0.9em', lineHeight: '1.5' }}>
              เบี้ยประกันและทุนประกันของบริการอิเล็กทรอนิกส์, งานซ่อมและลักษณะการใช้งาน
            </p>
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