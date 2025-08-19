package entity

import "gorm.io/gorm"

type ModelDetail struct {
	gorm.Model
	ModelDetail string

	//ModelID as foreign key
	ModelID *uint
	Models   Model `gorm:"foreignKey:ModelID"`

	// 1 ModelDetail can have many CarDetails
	CarDetails []CarDetail `gorm:"foreignKey:ModelDetailID"`
}