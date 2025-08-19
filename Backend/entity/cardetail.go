package entity

import "gorm.io/gorm"

type CarDetail struct {
	gorm.Model

	// CarID as foreign key
	CarID *uint
	Car   Car `gorm:"foreignKey:CarID"`

	// ModelDetailID as foreign key
	ModelDetailID *uint
	ModelDetail  ModelDetail //`gorm:"foreignKey:ModelDetailID"`
}
