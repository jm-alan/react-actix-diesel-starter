use actix_web::{HttpServer, App};
mod routes;
use routes::hello;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
  HttpServer::new(|| {
    App::new()
    .service(hello)
  })
  .bind("localhost:5000")
  .unwrap()
  .run()
  .await
}
