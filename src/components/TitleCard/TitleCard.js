import * as titleStyle from "./title.module.css";

export default function TitleCard({ title = "Change Param title", backImg = "https://picsum.photos/1080", author = "Change Param author" }) {
    const backgroundImage = `linear-gradient(180deg, #00000077 0%, #00000077 100%), url(${backImg})`;

    return (
        <section>
            <div className={titleStyle.titleSec} style={{ backgroundImage }}>
                <h2>{title}</h2>
            </div>

            <div className={titleStyle.authorSec}>
                <p>Author: {author}</p>
            </div>
        </section>
    );
}
