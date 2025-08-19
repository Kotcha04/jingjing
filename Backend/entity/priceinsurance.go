package entity

import "gorm.io/gorm"

type PriceInsurance struct {
	gorm.Model

	// InsuranceID as foreign key
	InsuranceID *uint
	Insurance   Insurance `gorm:"foreignKey:InsuranceID"`

	// PriceID as foreign key
	PriceID *uint
	Price   Price `gorm:"foreignKey:PriceID"`
}
