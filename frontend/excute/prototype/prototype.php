<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../style.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sriracha">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">

</head>

<body>
    <button class="buttonprocess" data-bs-toggle="collapse" data-bs-target="#prototype" aria-expanded="false" aria-controls="prototype">
        <i class="fa-solid fa-swatchbook fa-2x"></i>
    </button>
    <span>
        Prototype
    </span>
    <div class="collapse" id="prototype">
        <div class="card card-body" style="margin-top: 30%;width: 1000px;height: 1000px;margin-left: -250px;">
            <span style="font-size: xx-large;font-weight: bold;padding-left: 2rem;margin-bottom: 3%;margin-top:  2%;">
                Prototype & Confirm
            </span><br>
            <div class="paperprototype" style="text-align: left;">
                <div style="margin: 5px 0px 20px 5px;">
                    <span>
                        Prototype
                    </span><br>
                </div>
                <span style="font-size: large;font-weight: bold;padding-left: 2rem;margin-bottom: 3%;margin-top:  5%;">
                    UX/UI (Prototype)
                </span><br>
                <div class="input-group mb-3 mt-5" style="margin: 0rem 5rem 0rem 5rem;">
                    <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                        FILE</span>
                    <input type="file" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                </div>
                <div class="input-group mb-3 mt-5" style="margin: 0rem 5rem 0rem 5rem;">
                    <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                        LINK</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                </div>
                <div class="d-flex justify-content-center mt-1" style="width: 100%;">
                    <button class="buttonsave">บันทึก</button>
                    <button class="buttonedit">เเก้ไข</button>
                </div>

            </div>
            <div class="confirmprototype" style="text-align: left;">
                <div style="margin: 5px 0px 20px 5px;">
                    <span>
                        Confirm Prototype
                    </span><br>
                </div>
                <div class="d-flex justify-content-center mt-1" style="width: 100%;">
                    <div class="p-2 bd-highlight" style="width: 100%;">
                        <div class="input-group " style="width: 100%;">
                            <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                        </div>
                    </div>
                    <div class="p-2 bd-highlight" style="width: 100%;">
                        <div class="input-group " style="width: 100%;">
                            <span class="input-group-text" id="inputGroup-sizing-default">Topic</span>
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center" style="width: 100%;">
                    <div class="p-2 bd-highlight" style="width: 100%;">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                        <!-- <input type="text" style="width: 100%;height: 200px;"> -->
                    </div>
                </div>
                <div class="d-flex justify-content-center" style="width: 100%;">
                    <div class="p-2 bd-highlight" style="width: 100%;">
                        <div class="input-group" style="width: 100%;">
                            <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                FILE</span>
                            <input type="file" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                        </div>
                    </div>
                    <div class="p-2 bd-highlight" style="width: 100%;">
                        <div class="input-group" style="width: 100%;">
                            <span class="input-group-text" id="inputGroup-sizing-default">ATTECH
                                LINK</span>
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                        </div>
                    </div>

                </div>
                <div class="d-flex justify-content-sm-end mt-1" style="width: 100%;">
                    <button class="buttonsend" style="margin-right: 3%;">SEND</button>
                </div>
            </div>
        </div>
    </div>
</body>

</html>