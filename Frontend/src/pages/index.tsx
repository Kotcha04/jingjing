import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";

export default function VehicleForm() {
  const [page, setPage] = useState(1);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center bg-yellow-400 p-4 rounded-t-lg">
        <div className="space-x-6 font-semibold text-black">
          <span className="underline">ข้อมูลรถยนต์</span>
          <span>ตารางการนัดหมาย</span>
          <span>รายการรถที่ดูแล</span>
          <span>ข้อมูลลูกค้าที่ดูแล</span>
        </div>
        <div className="font-bold text-black">นายชิสเต็ม อนไลน์สี 😃</div>
      </div>

      {page === 1 && (
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-1">ยี่ห้อรถยนต์</label>
            <Select>
              <SelectTrigger><SelectValue placeholder="เลือกยี่ห้อรถยนต์" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="toyota">Toyota</SelectItem>
                <SelectItem value="honda">Honda</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block font-semibold mb-1">รุ่นรถยนต์</label>
            <Select>
              <SelectTrigger><SelectValue placeholder="เลือกรุ่นรถยนต์" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="camry">Camry</SelectItem>
                <SelectItem value="civic">Civic</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block font-semibold mb-1">ปีผลิต</label>
            <Input type="text" placeholder="เช่น 2020" />
          </div>

          <div>
            <label className="block font-semibold mb-1">รายละเอียดรุ่นรถ</label>
            <Input type="text" />
          </div>

          <div>
            <label className="block font-semibold mb-1">ทะเบียนรถยนต์</label>
            <Input type="text" />
          </div>

          <div>
            <label className="block font-semibold mb-1">จังหวัดในทะเบียน</label>
            <Select>
              <SelectTrigger><SelectValue placeholder="เลือกจังหวัด" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="bangkok">กรุงเทพมหานคร</SelectItem>
                <SelectItem value="chiangmai">เชียงใหม่</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block font-semibold mb-1">เลขไมล์ปัจจุบัน</label>
            <Input type="text" />
          </div>

          <div>
            <label className="block font-semibold mb-1">ประเภทการใช้งาน</label>
            <Select>
              <SelectTrigger><SelectValue placeholder="เลือกประเภทการใช้งาน" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="personal">ส่วนบุคคล</SelectItem>
                <SelectItem value="commercial">เชิงพาณิชย์</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="col-span-2 text-center">
            <Button onClick={() => setPage(2)}>ถัดไป</Button>
          </div>
        </div>
      )}

      {page === 2 && (
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-1">สีรถยนต์</label>
            <Input type="text" />
          </div>

          <div>
            <label className="block font-semibold mb-1">รูปภาพรถยนต์</label>
            <Card className="h-40 flex items-center justify-center text-gray-500 border-dashed border-2">
              <div>ท่านสามารถลากและวางไฟล์ที่นี่หากต้องการเพิ่ม</div>
            </Card>
          </div>

          <div>
            <label className="block font-semibold mb-1">อายุการใช้งาน</label>
            <Input type="text" />
          </div>

          <div className="col-span-2">
            <label className="block font-semibold mb-1">สถานะรถยนต์</label>
            <RadioGroup defaultValue="ว่าง" className="flex space-x-6 mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="ว่าง" id="ว่าง" />
                <label htmlFor="ว่าง">ว่าง</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="ขายแล้ว" id="ขายแล้ว" />
                <label htmlFor="ขายแล้ว">ขายแล้ว</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="ให้เช่า" id="ให้เช่า" />
                <label htmlFor="ให้เช่า">ให้เช่า</label>
              </div>
            </RadioGroup>
          </div>

          <div className="col-span-2 flex justify-between">
            <Button variant="outline" onClick={() => setPage(1)}>ยกเลิก</Button>
            <Button>บันทึกข้อมูล</Button>
          </div>
        </div>
      )}
    </div>
  );
}
