// Ubuntu Core Configuration
// Copyright 2020 Canonical Ltd.  All rights reserved.

package web

import (
	"log"
	"net/http"
)

type indexData struct {
	Common commonData
}

// Index is the front page of the web application
func (srv Web) Index(w http.ResponseWriter, r *http.Request) {
	data := indexData{commonData{Username: getUsername(r)}}

	t, err := srv.templates("index.html")
	if err != nil {
		log.Printf("Error loading the application template: %v\n", err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	err = t.Execute(w, data)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}
