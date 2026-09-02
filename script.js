/* =========================================================
   DWI NOVAL KURNIAWAN
   DOCUMENTATION VIEWER
========================================================= */


document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =================================================
           MODAL ELEMENTS
        ================================================= */

        const modal =
            document.getElementById(
                "documentationModal"
            );


        const modalNumber =
            document.getElementById(
                "modalProjectNumber"
            );


        const modalTitle =
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


        const closeButton =
            document.getElementById(
                "modalClose"
            );


        const modalOverlay =
            document.querySelector(
                ".modal-overlay"
            );


        const documentationButtons =
            document.querySelectorAll(
                ".documentation-btn"
            );



        /* =================================================
           DOCUMENTATION DATA
        ================================================= */

        const documentationData = {


            /* =============================================
               PROJECT 01
            ============================================== */

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
                            "Hardware implementation of the three-phase interleaved buck converter system."
                    },

                    {
                        src:
                            "image/project-01-current-experimental.jpg",

                        caption:
                            "Experimental current waveform measurement of the implemented converter."
                    },

                    {
                        src:
                            "image/project-01-current-simulation.jpg",

                        caption:
                            "Simulation result showing the three-phase current response."
                    },

                    {
                        src:
                            "image/project-01-response-experimental.jpg",

                        caption:
                            "Experimental step-response result of the closed-loop current controller."
                    },

                    {
                        src:
                            "image/project-01-response-simulation.jpg",

                        caption:
                            "Simulation step-response result used for controller validation."
                    }

                ]

            },


            /* =============================================
               PROJECT 02
            ============================================== */

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
                            "Overall hardware implementation of the Haiwell PLC-based synchronous generator excitation system."
                    }

                ]

            },


            /* =============================================
               PROJECT 03
            ============================================== */

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
                            "Hardware implementation using dual MPU9250 IMU sensors and ESP32."
                    },

                    {
                        src:
                            "image/project-03-screenshot-web-pemantauan.jpg",

                        caption:
                            "Web-based monitoring dashboard displaying real-time sensor data."
                    }

                ]

            },


            /* =============================================
               PROJECT 04
            ============================================== */

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
                            "Hardware implementation of the multicell H-bridge inverter using STM32F4."
                    }

                ]

            },


            /* =============================================
               PROJECT 05
            ============================================== */

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
                            "Hardware prototype of the five-level single-phase buck-boost inverter."
                    }

                ]

            },


            /* =============================================
               TEACHING ASSISTANT
            ============================================== */

            teachingAssistant: {

                number:
                    "EXPERIENCE / TEACHING ASSISTANT",

                title:
                    "Teaching Assistant — Electrical Engineering Laboratories",

                images: [

                    {
                        src:
                            "image/teaching-assistant-sk-dekan.jpg",

                        caption:
                            "Dean's decree appointing Dwi Noval Kurniawan as a Teaching Assistant in the Faculty of Engineering."
                    }

                ]

            },


            /* =============================================
               MAINTENANCE
            ============================================== */

            maintenance: {

                number:
                    "EXPERIENCE / MAINTENANCE",

                title:
                    "Maintenance Division Intern — PT POMI, Paiton",

                images: [

                    {
                        src:
                            "image/maintenance-sertifikat-magang.jpg",

                        caption:
                            "Internship certificate from PT POMI."
                    },

                    {
                        src:
                            "image/maintenance-foto-lapangan.jpg",

                        caption:
                            "Field documentation during the maintenance internship at the power plant."
                    }

                ]

            },


            /* =============================================
               PUBLICATION
            ============================================== */

            publication: {

                number:
                    "RESEARCH / ICPERE 2026",

                title:
                    "Single Output Current Sensor Implementation in Three-Phase Buck Converter for Controlled Excitation of Synchronous Generators",

                images: [

                    {
                        src:
                            "image/publication-presentasi-01.jpg",

                        caption:
                            "Presentation of the research at ICPERE 2026."
                    },

                    {
                        src:
                            "image/publication-presentasi-02.jpg",

                        caption:
                            "Research presentation session at ICPERE 2026."
                    },

                    {
                        src:
                            "image/publication-sertifikat-author.jpg",

                        caption:
                            "ICPERE 2026 certificate recognizing the author role."
                    },

                    {
                        src:
                            "image/publication-sertifikat-presenter.jpg",

                        caption:
                            "ICPERE 2026 certificate recognizing the presenter role."
                    }

                ]

            },


            /* =============================================
               ADARO SCHOLARSHIP
            ============================================== */

            scholarship: {

                number:
                    "EDUCATION / SCHOLARSHIP",

                title:
                    "Adaro Scholarship",

                images: [

                    {
                        src:
                            "image/adaro-scholarship.jpg",

                        caption:
                            "Scholarship statement/document confirming the Adaro Scholarship award."
                    }

                ]

            },


            /* =============================================
               VICE PRESIDENT
            ============================================== */

            vicePresident: {

                number:
                    "LEADERSHIP / BEM",

                title:
                    "Vice President — Student Executive Board, Faculty of Engineering",

                images: [

                    {
                        src:
                            "image/vice-president-sertifikat.jpg",

                        caption:
                            "Certificate recognizing the Vice President position in the Student Executive Board of the Faculty of Engineering."
                    }

                ]

            }

        };



        /* =================================================
           SHOW MAIN IMAGE
        ================================================= */

        function showMainImage(
            imageData
        ) {

            modalMainImage.src =
                imageData.src;


            modalMainImage.alt =
                imageData.caption;


            modalCaption.textContent =
                imageData.caption;

        }



        /* =================================================
           CREATE THUMBNAILS
        ================================================= */

        function createThumbnails(
            images
        ) {


            thumbnailContainer.innerHTML =
                "";


            images.forEach(
                function (
                    imageData,
                    index
                ) {


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


                    /* First active */

                    if (
                        index === 0
                    ) {

                        thumbnail.classList.add(
                            "active"
                        );

                    }


                    /* Image */

                    const image =
                        document.createElement(
                            "img"
                        );


                    image.src =
                        imageData.src;


                    image.alt =
                        imageData.caption;



                    /* Number */

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



                    thumbnail.appendChild(
                        image
                    );


                    thumbnail.appendChild(
                        number
                    );



                    /* Thumbnail click */

                    thumbnail.addEventListener(
                        "click",
                        function () {


                            showMainImage(
                                imageData
                            );


                            document
                                .querySelectorAll(
                                    ".documentation-thumbnail"
                                )
                                .forEach(
                                    function (
                                        item
                                    ) {

                                        item.classList.remove(
                                            "active"
                                        );

                                    }
                                );


                            thumbnail.classList.add(
                                "active"
                            );

                        }
                    );


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
            documentationId
        ) {


            const documentation =
                documentationData[
                    documentationId
                ];


            if (
                !documentation
            ) {

                console.error(
                    "Documentation tidak ditemukan:",
                    documentationId
                );

                return;

            }



            /* Set modal information */

            modalNumber.textContent =
                documentation.number;


            modalTitle.textContent =
                documentation.title;



            /* Main image */

            showMainImage(
                documentation.images[0]
            );



            /* Thumbnails */

            createThumbnails(
                documentation.images
            );



            /* Open modal */

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


        }



        /* =================================================
           BUTTON EVENT
        ================================================= */

        documentationButtons.forEach(
            function (
                button
            ) {


                button.addEventListener(
                    "click",
                    function () {


                        const documentationId =
                            this.getAttribute(
                                "data-documentation"
                            );


                        openDocumentation(
                            documentationId
                        );


                    }
                );


            }
        );



        /* =================================================
           CLOSE MODAL
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


        }



        /* =================================================
           CLOSE BUTTON
        ================================================= */

        closeButton.addEventListener(
            "click",
            closeDocumentation
        );



        /* =================================================
           CLICK OVERLAY
        ================================================= */

        modalOverlay.addEventListener(
            "click",
            closeDocumentation
        );



        /* =================================================
           ESC KEY
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
           MAIN IMAGE CLICK
        ================================================= */

        modalMainImage.addEventListener(
            "click",
            function () {


                if (
                    this.src
                ) {

                    window.open(
                        this.src,
                        "_blank"
                    );

                }

            }
        );


    }
);