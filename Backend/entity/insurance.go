package entity

import "gorm.io/gorm"

type Insurance struct {
	gorm.Model

	// InsuranceStatusID as foreign key
	InsuranceStatusID *uint
	InsuranceStatus   InsuranceStatus `gorm:"foreignKey:InsuranceStatusID"`

	// SalesContractID as foreign key
	SalesContractID *uint
	SalesContract   SalesContract `gorm:"foreignKey:SalesContractID"`

	// 1 Insurance can have many PriceInsurance
	PriceInsurances []PriceInsurance `gorm:"foreignKey:InsuranceID"`
}