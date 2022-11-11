import config from "../config.json";
import styled from "styled-components";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";

function HomePage() {

    const estilosDaHomepage = {
        // backgroundColor: "red" 
    };

    // console.log(config.playlists);

    return (
        <>
            <CSSReset />
            <div style={estilosDaHomepage}>
                <Menu />
                <Header></Header>
                <Timeline playlists={config.playlists} >
                    Conteudo
                </Timeline>
            </div >
        </>
    );
}

export default HomePage

// function Menu() {
//     return (
//         <div>
//             Menu
//         </div>
//     )
// }


const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%
    }
    .user-info{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
    }
`;



function Header() {
    return (
        <StyledHeader>
            <section className="user-info">
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline(propriedades) {
    // console.log("Dentro do componente", propriedades);

    const playlistNames = Object.keys(propriedades.playlists);

    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = propriedades.playlists[playlistName];
                return (
                    <section>
                        <h2>
                            {playlistName}
                        </h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </div>
    )
}
