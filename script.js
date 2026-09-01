/* =========================================================
   DWI NOVAL KURNIAWAN
   PROJECT DOCUMENTATION VIEWER
========================================================= */


document.addEventListener(
    "DOMContentLoaded",
    function () {



        /* =================================================
           ELEMENTS
        ================================================= */

        const modal =
            document.getElementById(
                "documentationModal"
            );


        const modalProjectNumber =
            document.getElementById(
                "modalProjectNumber"
            );


        const modalProjectTitle =
            document.getElementById(
                "modalProjectTitle"
            );


        const modalMainImage =
            document.getElementById(
                "modalMainImage"
            );


        const modalCaption =
            document.getElementById(
                "modalCaption"
            );


        const thumbnailContainer =
            document.getElementById(
                "thumbnailContainer"
            );


        const modalClose =
            document.getElementById(
                "modalClose"
            );


        const modalOverlay =
            document.querySelector(
                ".modal-overlay"
            );


        const buttons =
            document.querySelectorAll(
                ".documentation-btn"
            );



        /* =================================================
           SAFETY CHECK
        ================================================= */

        if (!modal) {

            console.error(
                "Documentation modal tidak ditemukan."
            );

            return;

        }



        /* =================================================
           PROJECT DOCUMENTATION DATA
        ================================================= */

        const projectDocumentation = {


            /* =================================================
               PROJECT 01
            ================================================= */

            project1: {

                number:
                    "PROJECT 01",

                title:
                    "Single-Sensor Current Control for Three-Phase Buck Converter",

                images: [

                    {
                        src:
                            "image/project-01-hardware.jpg",

                        caption:
                            "Hardware implementation of the three-phase interleaved buck converter system, including the implementation module, DC link source, signal generator, digital oscilloscope, and digital signal uploader."
                    },


                    {
                        src:
                            "image/project-01-current-experimental.jpg",

                        caption:
                            "Experimental current waveform measurement showing the three phase currents and total current of the implemented converter."
                    },


                    {
                        src:
                            "image/project-01-current-simulation.jpg",

                        caption:
                            "Simulation result showing the three phase currents and total current before hardware comparison."
                    },


                    {
                        src:
                            "image/project-01-response-experimental.jpg",

                        caption:
                            "Experimental step-response result used to evaluate the closed-loop current controller response."
                    },


                    {
                        src:
                            "image/project-01-response-simulation.jpg",

                        caption:
                            "Simulation step-response result used for comparison and controller performance validation."
                    }

                ]

            },



            /* =================================================
               PROJECT 02
            ================================================= */

            project2: {

                number:
                    "PROJECT 02",

                title:
                    "PLC-Based Synchronous Generator Excitation System",

                images: [

                    {
                        src:
                            "image/project-02-hardware.jpg",

                        caption:
                            "Overall hardware implementation of the Haiwell PLC-based PWM control system for synchronous generator excitation."
                    }

                ]

            },



            /* =================================================
               PROJECT 03
            ================================================= */

            project3: {

                number:
                    "PROJECT 03",

                title:
                    "Sport Hall Structural Displacement Monitoring System",

                images: [

                    {
                        src:
                            "image/project-03-hardware.jpg",

                        caption:
                            "Hardware implementation of the structural displacement monitoring system using dual MPU9250 IMU sensors and ESP32."
                    },


                    {
                        src:
                            "image/project-03-screenshot-web-pemantauan.jpg",

                        caption:
                            "Web-based structural monitoring dashboard displaying real-time sensor data transmitted through MQTT."
                    }

                ]

            },



            /* =================================================
               PROJECT 04
            ================================================= */

            project4: {

                number:
                    "PROJECT 04",

                title:
                    "Multicell H-Bridge Inverter",

                images: [

                    {
                        src:
                            "image/project-04-hardware-multicell.jpg",

                        caption:
                            "Hardware implementation of the multicell H-bridge inverter using STM32F4-based switching control."
                    }

                ]

            },



            /* =================================================
               PROJECT 05
            ================================================= */

            project5: {

                number:
                    "PROJECT 05",

                title:
                    "5-Level Buck-Boost Inverter",

                images: [

                    {
                        src:
                            "image/project-05-hardware-5-level.jpg",

                        caption:
                            "Hardware prototype of the five-level single-phase buck-boost inverter using seven active power switches and Arduino Mega-based switching control."
                    }

                ]

            }

        };



        /* =================================================
           SHOW MAIN IMAGE
        ================================================= */

        function showMainImage(
            src,
            caption
        ) {

            modalMainImage.src =
                src;


            modalMainImage.alt =
                caption;


            modalCaption.textContent =
                caption;

        }



        /* =================================================
           CREATE THUMBNAILS
        ================================================= */

        function createThumbnails(
            project
        ) {


            /* Clear previous thumbnails */

            thumbnailContainer.innerHTML = "";


            project.images.forEach(
                function (
                    imageData,
                    index
                ) {


                    /* -------------------------------------
                       BUTTON
                    ------------------------------------- */

                    const thumbnail =
                        document.createElement(
                            "button"
                        );


                    thumbnail.type =
                        "button";


                    thumbnail.className =
                        "documentation-thumbnail";


                    thumbnail.setAttribute(
                        "aria-label",
                        imageData.caption
                    );


                    /* First image active */

                    if (
                        index === 0
                    ) {

                        thumbnail.classList.add(
                            "active"
                        );

                    }



                    /* -------------------------------------
                       IMAGE
                    ------------------------------------- */

                    const image =
                        document.createElement(
                            "img"
                        );


                    image.src =
                        imageData.src;


                    image.alt =
                        imageData.caption;



                    /* -------------------------------------
                       NUMBER
                    ------------------------------------- */

                    const number =
                        document.createElement(
                            "span"
                        );


                    number.className =
                        "thumbnail-number";


                    number.textContent =
                        String(
                            index + 1
                        ).padStart(
                            2,
                            "0"
                        );



                    /* -------------------------------------
                       ADD ELEMENTS
                    ------------------------------------- */

                    thumbnail.appendChild(
                        image
                    );


                    thumbnail.appendChild(
                        number
                    );



                    /* -------------------------------------
                       CLICK EVENT
                    ------------------------------------- */

                    thumbnail.addEventListener(
                        "click",
                        function () {


                            /* Change main image */

                            showMainImage(
                                imageData.src,
                                imageData.caption
                            );



                            /* Remove active */

                            const allThumbnails =
                                thumbnailContainer.querySelectorAll(
                                    ".documentation-thumbnail"
                                );


                            allThumbnails.forEach(
                                function (
                                    item
                                ) {

                                    item.classList.remove(
                                        "active"
                                    );

                                }
                            );



                            /* Add active */

                            thumbnail.classList.add(
                                "active"
                            );

                        }
                    );



                    /* -------------------------------------
                       ADD TO CONTAINER
                    ------------------------------------- */

                    thumbnailContainer.appendChild(
                        thumbnail
                    );


                }
            );

        }



        /* =================================================
           OPEN DOCUMENTATION
        ================================================= */

        function openDocumentation(
            projectId
        ) {


            const project =
                projectDocumentation[
                    projectId
                ];


            /* Project exists? */

            if (
                !project
            ) {

                console.error(
                    "Project tidak ditemukan:",
                    projectId
                );

                return;

            }



            /* ---------------------------------------------
               SET INFORMATION
            --------------------------------------------- */

            modalProjectNumber.textContent =
                project.number;


            modalProjectTitle.textContent =
                project.title;



            /* ---------------------------------------------
               FIRST IMAGE
            --------------------------------------------- */

            showMainImage(
                project.images[0].src,
                project.images[0].caption
            );



            /* ---------------------------------------------
               THUMBNAILS
            --------------------------------------------- */

            createThumbnails(
                project
            );



            /* ---------------------------------------------
               OPEN MODAL
            --------------------------------------------- */

            modal.classList.add(
                "active"
            );


            modal.setAttribute(
                "aria-hidden",
                "false"
            );


            document.body.classList.add(
                "modal-open"
            );


            /* Scroll modal to top */

            const content =
                document.querySelector(
                    ".documentation-content"
                );


            if (content) {

                content.scrollTop =
                    0;

            }

        }



        /* =================================================
           CLOSE DOCUMENTATION
        ================================================= */

        function closeDocumentation() {


            modal.classList.remove(
                "active"
            );


            modal.setAttribute(
                "aria-hidden",
                "true"
            );


            document.body.classList.remove(
                "modal-open"
            );


            /* Reset image after close */

            setTimeout(
                function () {

                    modalMainImage.src =
                        "";

                    modalCaption.textContent =
                        "";

                },
                200
            );

        }



        /* =================================================
           BUTTON EVENTS
        ================================================= */

        buttons.forEach(
            function (
                button
            ) {


                button.addEventListener(
                    "click",
                    function () {


                        const projectId =
                            button.getAttribute(
                                "data-project"
                            );


                        openDocumentation(
                            projectId
                        );

                    }
                );

            }
        );



        /* =================================================
           CLOSE BUTTON
        ================================================= */

        modalClose.addEventListener(
            "click",
            function () {

                closeDocumentation();

            }
        );



        /* =================================================
           CLICK OVERLAY
        ================================================= */

        modalOverlay.addEventListener(
            "click",
            function () {

                closeDocumentation();

            }
        );



        /* =================================================
           ESCAPE KEY
        ================================================= */

        document.addEventListener(
            "keydown",
            function (
                event
            ) {


                if (
                    event.key === "Escape" &&
                    modal.classList.contains(
                        "active"
                    )
                ) {

                    closeDocumentation();

                }

            }
        );



        /* =================================================
           MAIN IMAGE → OPEN LARGE IMAGE
        ================================================= */

        modalMainImage.addEventListener(
            "click",
            function () {


                if (
                    modalMainImage.src
                ) {

                    window.open(
                        modalMainImage.src,
                        "_blank"
                    );

                }

            }
        );



        /* =================================================
           IMAGE ERROR HANDLER
        ================================================= */

        modalMainImage.addEventListener(
            "error",
            function () {

                console.error(
                    "Gambar dokumentasi gagal dimuat:",
                    modalMainImage.src
                );

            }
        );


    }
);