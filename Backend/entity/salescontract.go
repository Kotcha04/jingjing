package entity

import "gorm.io/gorm"

type SalesContract struct {
	gorm.Model
	Status string
	Customer_ID *uint
	Car_ID *uint

	// EmployeeID as foreign key
	EmployeeID *uint
	Employee   Employee `gorm:"foreignKey:EmployeeID"`

	// 1 SalesContract can have many Insurances
	Insurances []Insurance `gorm:"foreignKey:SalesContractID"`
}