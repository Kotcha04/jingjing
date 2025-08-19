package entity

import (
	"gorm.io/gorm"
)

type Image struct {
	gorm.Model
	Image         []byte //`gorm:"type:blob"`

	// DetailID as foreign key
	DetailID *uint
	Detail   Detail `gorm:"foreignKey:DetailID"`

}