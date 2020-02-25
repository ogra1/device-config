// Ubuntu Core Configuration
// Copyright 2020 Canonical Ltd.  All rights reserved.

package web

import (
	"log"
	"net/http"
)

type timeData struct {
	Common commonData
}

// Network is the web page for configuring the network and proxy
func (srv Web) Time(w http.ResponseWriter, r *http.Request) {
	data := timeData{commonData{Username: getUsername(r)}}

	// Parse the templates
	t, err := srv.templates("time.html")
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