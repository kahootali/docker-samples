package main

import (
	"fmt"
	"net/http"
)


func main() {

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "No Endpoint ")
	})

	http.HandleFunc("/hello", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello, you've requested: %s\n", r.URL.Path)
	})
	i := 0

	http.HandleFunc("/count", func(w http.ResponseWriter, r *http.Request) {
		i = i + 1
		fmt.Fprintf(w, "%d", i)
	})
	fmt.Println("Server is Listening at 127.0.0.1:8080")

	http.ListenAndServe(":8080", nil)
}
