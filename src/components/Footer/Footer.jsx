const Footer = () => {
    return (
        <>
            <div className="bg-dark text-center text-white">

                <div className="container p-4">

                    <div className="mb-4">

                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            href="https://www.facebook.com/pastelerialenuit"
                            role="button" target="_blank"
                        ><i className="bi bi-facebook"></i
                        ></a>

                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            href="https://www.instagram.com/lenuitpasteleria/"
                            role="button" target="_blank"
                        ><i className="bi bi-instagram"></i
                        ></a>


                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            href="https://www.tiktok.com/@lenuitpasteleria"
                            role="button" target="_blank"
                        ><i className="bi bi-tiktok"></i
                        ></a>
                    </div>



                    <div className="mb-4">
                        <p>
                            Pasteleria gourmet 👩‍🍳 Y para eventos🎂 <br />
                            Lu a vie 8hs a 12.30hs y 16hs a 20hs <br />
                            Sáb 9hs a 12.30hs y 16hs a 20hs <br />
                            📍Pte Roca 939, Rosario
                        </p>
                    </div>

                </div>


                <div className="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
                    © 2022 Copyright:
                    <a className="text-white" href="#">Pastelería Lenuit</a>
                </div>

            </div>
        </>
    );
};
export default Footer;