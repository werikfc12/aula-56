$.ajax({
  url: "http://localhost:3000/images",
  method: "GET",
  success: (images) => {
    images.forEach((image) => {
      $("#gallery").append(`
      <div>
        <img class="img-click" data-title="${image.title}" src="${image.url}" alt="${image.description}" width="300px">
      </div>
    `)
    }
    )

    $(".img-click").on("click", function () {
      const src = $(this).attr("src");
      const title = $(this).data("title");
      const description = $(this).data("description");
      $("#modal-img").attr("src", src
      )
      $("#modal-caption").html(`
  <strong>${title}</strong>
  <br>
  <p>${description}</p>
  `)
      $("#modal").modal("show")

    })



  },
  error: (error) => {
    alert("Algo deu errado!");
    console.error(error);
  }
})