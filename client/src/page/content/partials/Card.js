import React from 'react';
import "../styles/card.css";
function Card(props) {
    return (
        <div className="card__container">
            <div className="header">
                <img className="img__profile" src="https://qph.fs.quoracdn.net/main-thumb-t-3628984-100-bpksdlybhznocbyxnkqqihcaujbyqtog.jpeg" alt=""/>
                <div className="user__profile">
                    <small className="user__name">Kartika RJ</small>
                    <small className="user__username">Masih kuli</small>
                </div>
            </div>
            <div className="content__">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ad. Doloribus possimus, consequuntur nobis ab cumque sint odit recusandae quidem temporibus, nostrum odio debitis, adipisci libero ut iusto ipsa soluta!
                Perferendis itaque necessitatibus est ducimus ut fuga quidem, doloremque commodi. Ducimus voluptatibus excepturi quia? Modi minus minima maiores eveniet quisquam, omnis sit aspernatur iste! Hic inventore fugit nisi alias illum.
                Odio cupiditate voluptates, voluptas quidem repellat sed earum similique voluptate nam deserunt? Iusto nesciunt dignissimos est vel non quam explicabo officiis. Rerum, sit. Iusto reiciendis laudantium tenetur magnam explicabo neque.
                Et, rerum assumenda saepe distinctio eum libero aperiam ipsam animi. Perferendis voluptates dolorem nam, ducimus ex cupiditate inventore dignissimos non! Hic soluta doloribus quam tenetur doloremque non esse facere quasi?
                Officiis doloremque dolorem dolor maiores quis quam voluptas magnam officia. Ullam expedita sequi commodi nemo minus nostrum aut at quia iure adipisci doloribus labore laboriosam nihil corrupti similique, nam delectus.
            </div>
        </div>
    );
}

export default Card;