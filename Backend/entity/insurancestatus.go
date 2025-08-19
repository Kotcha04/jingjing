package entity

import "gorm.io/gorm"

type InsuranceStatus struct {
	gorm.Model
	Status string

	// 1 InsuranceStatus can have many Insurances
	Insurances []Insurance `gorm:"foreignKey:InsuranceStatusID"`
}