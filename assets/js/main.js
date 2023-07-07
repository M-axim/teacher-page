function closeModal()
{
    $("#image-modal").modal('hide')
}

$(function() {
  $('a.gallery-photo').click(function(e) {
    e.preventDefault()
    $('#image-modal .modal-body img').attr('src', $(this).find('img').attr('src'))
    $("#image-modal").modal('show')
  });
  $('#image-modal .modal-body img').on('click', closeModal());
});

$(function() {
  $('a.qr-link').click(function(e) {
    e.preventDefault()
    $('#image-modal .modal-body img').attr('src', "assets/img/qr-code.png")
    $("#image-modal").modal('show')
  });
  $('#image-modal .modal-body img').on('click', closeModal());
});

$(function() {
  $('.phone-form').click(function(e) {
    e.preventDefault()
    $("#text-success").hide()
    $("#contact-modal").modal('show')
  });
  $('#contact-modal .modal-body img').on('click', function() {
        $("#contact-modal").modal('hide')
  });
});

$("#new-contact").submit(function(event) {
  event.preventDefault()
  $("#new-contact")[0].reset()
  $("#text-success").show("slow")
});

$("body").append(`<div class="modal fade" id="contact-modal" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Если у вас есть вопросы, то оставьте заявку
                        <small class="d-block">Я свяжусь с вами в самый короткий срок</small>
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                </div>
                <div class="modal-header alert-success" id="text-success">
                    <h5 class="modal-title m-auto">Форма отправлена
                    </h5>
                </div>
                <div class="modal-body text-center">
                    <div class="forms">
                        <div class="container">
                            <form id="new-contact" action="/" method="POST" class="was-validated">
                                <div class="form-row">
                                    <div class="form-group col-sm-6">
                                        <label for="name">*Имя</label>
                                        <input type="text" class="form-control" id="name" placeholder="Ваня" required>
                                        <div class="invalid-feedback">Введите ваше имя</div>
                                    </div>
                                    <div class="form-group col-sm-6">
                                        <label for="lastName">*Фамилия</label>
                                        <input type="text" class="form-control" id="lastName" placeholder="Иванов" required>
                                        <div class="invalid-feedback">Введите вашу фамилию</div>
                                    </div>
                                    <div class="form-group col-sm-6">
                                        <label for="inputEmail4">*Введите ваш email</label>
                                        <input type="email" placeholder="to@mail.ru" requires class="form-control" id="inputEmail4"required>
                                        <div class="invalid-feedback">Введите ваш email</div>
                                    </div>
                                    <div class="form-group col-sm-6">
                                        <label for="tel">*Введите ваш телефон</label>
                                        <input type="number" placeholder="79991234455" requires class="form-control" id="tel" required>
                                        <div class="invalid-feedback">Введен некоректный номер телефона</div>
                                    </div>
                                </div>
                                <button type="button" class="btn btn-primary mr-2" data-dismiss="modal">Закрыть</button>
                                <button type="submit" class="btn btn-primary">Отправить</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`)

$("body").append(`<footer class="footer p-3">
        <div class="container">
            <div class="row d-flex align-items-center">
                <div class="col-sm-6 d-flex justify-content-start">
                    <span class="d-block text-white m-auto">© ${new Date().getFullYear()} Автор</span>
                </div>
                <div class="col-sm-6 d-flex justify-content-end">
                    <span class="text-white m-auto">По рекламе: <a href="mailto:to@mail.ru" class="text-white"><u>mailto:to@mail.ru</u></a></span>
                </div>
            </div>
        </div>
    </footer>`)

var photoCount = 11
var galleryLiblary = $("#gallery-liblary")

for (var i = 1; i <= photoCount; i++) {
  galleryLiblary.append(`
   <div class="card">
    <a href="#" class="gallery-photo">
        <img class="w-100" src="https://placehold.co/200x200" alt="...">
    </a>
  </div>`)
}

