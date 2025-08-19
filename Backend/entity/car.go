package entity

import "gorm.io/gorm"

type Car struct {
	gorm.Model
	Brand     string
	Models     string
	Year      int
	MDetail   int

	// ProvinceID as foreign key
	ProvinceID *uint
	Province   Province `gorm:"foreignKey:ProvinceID"`

	// TypeID as foreign key
	TypeID *uint
	Type     Type `gorm:"foreignKey:TypeID"`

	// DetailID as foreign key
	DetailID *uint
	Detail   Detail `gorm:"foreignKey:DetailID"`

	// EmployeeID as foreign key
	EmployeeID *uint
	Employee   Employee `gorm:"foreignKey:EmployeeID"`

	// 1 Car can have many CarDetail
	CarDetails []CarDetail `gorm:"foreignKey:CarID"`
}
