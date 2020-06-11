import React from 'react';

export default function Page() {
    return (
        <article className="style-guide-page">
            <h1>Style Guide</h1>
            <hr></hr>

            <h2>Basic Styles</h2>
            <hr></hr>

            <ul>
                <li><strong>Bold</strong></li>
                <li><em>Italics</em></li>
                <li><del>Strikethrough</del></li>
                <li><a href="https://google.com">Google</a></li>
                <li><a href="email@gmail.com">email@gmail.com</a></li>
                <li><a href="tel:123123123">022 123123</a></li>
            </ul>

            <hr></hr>
            <h2>Paragraphs and Headings</h2>
            <hr></hr>

            <h1>Heading 1: The quick brown fox jumps over the lazy dog</h1>
            <p>
                Sweet marshmallow liquorice tootsie roll. Chocolate cake marzipan cake pudding donut apple pie tiramisu. Candy canes jujubes cake cake 
                marshmallow topping jelly beans. Carrot cake lollipop carrot cake caramels lemon drops dragée sugar plum tootsie roll.
            </p>
            <h2>Heading 2: The quick brown fox jumps over the lazy dog</h2>
            <p>Carrot cake chocolate cake tiramisu cheesecake chupa chups candy canes wafer pie. Tart lollipop ice cream liquorice. Pastry liquorice pie cheesecake tootsie roll bear claw cupcake pastry chocolate bar. Ice cream chocolate bar halvah. Chupa chups jelly-o tootsie roll danish carrot cake jujubes lollipop jelly. Cupcake gummi bears gingerbread candy cake gummies croissant sugar plum powder.</p>
            <h3>Heading 3: The quick brown fox jumps over the lazy dog</h3>
            <p>
                Icing
                candy canes pie. Sweet sesame snaps bonbon pastry halvah marshmallow. I
                love brownie I love marshmallow dessert lollipop pie topping cotton
                candy. Cookie soufflé wafer icing danish gummi bears topping halvah
                cotton candy. Toffee fruitcake lollipop danish soufflé. Cupcake
                liquorice tiramisu jujubes I love chocolate cake. Gingerbread ice cream
                pastry dragée wafer gummies cheesecake. Tart macaroon sugar plum tart
                croissant.
            </p>
            <h4>Heading 4: The quick brown fox jumps over the lazy dog</h4>
            <p>Gummies cake toffee wafer sweet roll. Carrot cake tart candy soufflé pudding jelly beans. Sesame snaps muffin gummi bears. Liquorice jujubes jelly-o chocolate cake bear claw sweet soufflé. Tart sesame snaps muffin marshmallow fruitcake sesame snaps topping jujubes. Dessert carrot cake fruitcake. Oat cake wafer gummi bears lollipop liquorice marzipan topping. Topping pudding cookie tootsie roll cheesecake biscuit muffin.</p>
            <h5>Heading 5: The quick brown fox jumps over the lazy dog</h5>
            <p>
                Croissant
                cotton candy wafer. Sweet roll jelly-o cheesecake gummies sweet bonbon
                topping. Apple pie bonbon candy canes jujubes. Icing gummies icing
                toffee marzipan. Lemon drops topping muffin topping halvah pudding.
                Apple pie tart chocolate bar brownie powder sweet chocolate cake. Pie
                jelly oat cake marshmallow apple pie jelly beans. Donut powder jujubes
                biscuit muffin jelly-o.
            </p>
            <h6>Heading 6: The quick brown fox jumps over the lazy dog</h6>
            <p>
                Donut
                chupa chups wafer cotton candy chocolate cake gummies jelly-o ice cream
                pie. Apple pie jelly beans cheesecake. Oat cake sugar plum jelly cupcake
                fruitcake apple pie candy chupa chups. Halvah jelly beans marshmallow
                jelly-o candy lemon drops lemon drops apple pie marzipan.
            </p>

            <hr></hr>
            <h2>Lists</h2>
            <hr></hr>

            <h3>Unordered List</h3>
            <ul>
                <li>List item 1
                    <ul>
                        <li>Sub list item 1</li>
                        <li>Sub list item 2</li>
                        <li>Sub list item 3
                            <ul>
                                <li>Sub sub list item 1</li>
                                <li>Sub sub list item 2</li>
                                <li>Sub sub list item 3</li>
                                <li>Sub sub list item 4</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>List item 2</li>
                <li>List item 3</li>
                <li>List item 4</li>
            </ul>
            <h3>Ordered List</h3>
            <ol>
                <li>List item 1
                    <ol>
                        <li>Sub list item 1</li>
                        <li>Sub list item 2</li>
                        <li>Sub list item 3
                            <ol>
                                <li>Sub sub list item 1</li>
                                <li>Sub sub list item 2</li>
                                <li>Sub sub list item 3</li>
                                <li>Sub sub list item 4</li>
                            </ol>
                        </li>
                    </ol>
                </li>
                <li>List item 2</li>
                <li>List item 3</li>
                <li>List item 4</li>
            </ol>

            <hr></hr>
            <h2>Table</h2>
            <hr></hr>

            <table>
                <tbody>
                    <tr>
                        <td>Row 1 Column 1</td>
                        <td>Row 1 Column 2</td>
                    </tr>
                    <tr>
                        <td>Row 2 Column 1</td>
                        <td>Row 2 Column 2</td>
                    </tr>
                    <tr>
                        <td>Row 3 Column 1</td>
                        <td>Row 3 Column 2</td>
                    </tr>
                </tbody>
            </table>

            <hr></hr>
            <h2>Other HTML ELEMENTS</h2>
            <hr></hr>

            <blockquote>
                <h6>Blockquote</h6>
                <p>Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.</p>
                <cite>Albert Einstein</cite>
            </blockquote>

            <button>Button</button>
           
        </article>
    );
}