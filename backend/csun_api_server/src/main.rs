use std::{fs::File, io::prelude::*, path::Path};
#[macro_use]
extern crate rocket;
use rocket::http::Status;
use rocket::response::{content, status};
use serde_derive::{Serialize, Deserialize};

#[derive(Debug, Serialize, Deserialize)]
struct Rating {
    star_rating: i32,
    author: String,
    professor_first_name: String,
    professor_last_name: String,
    paragraph: String,
    author_grade: char,
    subject: String,
    catalog_number: String
}




#[get("/<subject>/<data>")]
fn json(subject: &str, data: &str) -> status::Custom<content::RawJson<String>> {
    let mut response = String::new();

    let le_path = format!(
        "{}/json_{}/{}_{}.json",
        std::env::current_dir().unwrap().display().to_string(),
        data,
        subject.to_uppercase(),
        data
    );
    println!("{}", le_path);
    let path = Path::new(&le_path);
    let display = path.display();

    let mut file = match File::open(&path) {
        Err(why) => panic!("couldn't open {}: {}", display, why),
        Ok(file) => file,
    };

    match file.read_to_string(&mut response) {
        Err(why) => panic!("couldn't read {}: {}", display, why),
        Ok(_) => print!("All good\n"),
    }

    status::Custom(Status::ImATeapot, content::RawJson(response))
}

use rocket::serde::json::{Json};
#[post("/rating", format = "application/json", data = "<rating>")]
fn new_rating(rating: Json<Rating>) { 
    println!("{:#?}", rating);
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![json, new_rating])
}
