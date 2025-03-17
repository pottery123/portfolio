import React, { useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef();
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const handleIntersection = (entries = ["one", "two"], observer) => {
    entries.forEach((entry) => {
      setIsSticky(!entry.isIntersecting);
    });
  };
  return (
    <header ref={headerRef}>
      <div className="bg-aprenderBlue" ref={ref}>
        <h1>Dynamic Header</h1>
        <p>Scroll down to see the header change its appearance.</p>
      </div>
      <div className={`bg-aprenderPink ${!inView ? "visible" : ""}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras
        pulvinar mattis nunc. Ridiculus mus mauris vitae ultricies. Posuere ac
        ut consequat semper viverra. Lorem ipsum dolor sit amet consectetur
        adipiscing elit ut aliquam. Erat imperdiet sed euismod nisi. Dapibus
        ultrices in iaculis nunc sed. Eu volutpat odio facilisis mauris sit
        amet. Nunc mi ipsum faucibus vitae. Egestas egestas fringilla phasellus
        faucibus. Quam elementum pulvinar etiam non quam lacus suspendisse
        faucibus interdum. Turpis egestas integer eget aliquet nibh praesent
        tristique magna. Purus semper eget duis at tellus at urna condimentum.
        Mollis nunc sed id semper risus in hendrerit gravida. Leo a diam
        sollicitudin tempor id eu nisl nunc mi. At consectetur lorem donec massa
        sapien faucibus et molestie ac. Pharetra diam sit amet nisl suscipit
        adipiscing bibendum est. Sit amet mattis vulputate enim nulla aliquet
        porttitor lacus luctus. Arcu ac tortor dignissim convallis aenean et
        tortor at risus. Habitasse platea dictumst vestibulum rhoncus est.
        Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Id leo
        in vitae turpis massa sed elementum tempus egestas. Euismod nisi porta
        lorem mollis. Bibendum ut tristique et egestas. Aliquam vestibulum morbi
        blandit cursus risus at ultrices mi. Sit amet facilisis magna etiam
        tempor orci eu lobortis elementum. Vehicula ipsum a arcu cursus vitae
        congue mauris rhoncus. Dignissim suspendisse in est ante in. Vitae proin
        sagittis nisl rhoncus mattis rhoncus urna. Amet aliquam id diam
        maecenas. Id diam vel quam elementum pulvinar etiam non quam. Ipsum
        dolor sit amet consectetur. Sapien faucibus et molestie ac feugiat sed
        lectus vestibulum mattis. Massa tincidunt dui ut ornare lectus sit amet
        est. Scelerisque purus semper eget duis at tellus at urna. Nascetur
        ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Dui
        faucibus in ornare quam viverra orci sagittis eu. In fermentum et
        sollicitudin ac orci phasellus egestas tellus rutrum. Est ullamcorper
        eget nulla facilisi etiam dignissim diam quis enim. In nulla posuere
        sollicitudin aliquam ultrices. Facilisi cras fermentum odio eu feugiat
        pretium nibh. Adipiscing enim eu turpis egestas pretium aenean pharetra.
        Scelerisque fermentum dui faucibus in ornare. Odio aenean sed adipiscing
        diam donec. Nec feugiat in fermentum posuere urna nec tincidunt. Lectus
        arcu bibendum at varius vel pharetra vel turpis nunc. Aliquet bibendum
        enim facilisis gravida neque convallis a cras semper. Et leo duis ut
        diam quam nulla. Sit amet volutpat consequat mauris. Viverra tellus in
        hac habitasse platea dictumst vestibulum rhoncus est. Risus nullam eget
        felis eget nunc. Arcu non sodales neque sodales ut etiam. Et tortor at
        risus viverra adipiscing at in. In mollis nunc sed id semper risus in
        hendrerit gravida. Sed vulputate mi sit amet mauris commodo. Elementum
        facilisis leo vel fringilla. Bibendum est ultricies integer quis auctor
        elit sed vulputate mi. Quam viverra orci sagittis eu volutpat. Amet
        consectetur adipiscing elit pellentesque habitant morbi. Risus in
        hendrerit gravida rutrum. Et malesuada fames ac turpis egestas sed
        tempus urna. Fames ac turpis egestas integer. Lobortis elementum nibh
        tellus molestie nunc. Morbi blandit cursus risus at ultrices mi tempus
        imperdiet nulla. Lorem donec massa sapien faucibus. Laoreet id donec
        ultrices tincidunt arcu. Habitasse platea dictumst vestibulum rhoncus
        est pellentesque elit. Neque convallis a cras semper auctor neque vitae.
        Tempus urna et pharetra pharetra massa massa ultricies. Nam libero justo
        laoreet sit amet cursus sit. Massa enim nec dui nunc mattis enim ut
        tellus elementum.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Viverra nibh cras pulvinar mattis nunc. Ridiculus mus mauris vitae
        ultricies. Posuere ac ut consequat semper viverra. Lorem ipsum dolor sit
        amet consectetur adipiscing elit ut aliquam. Erat imperdiet sed euismod
        nisi. Dapibus ultrices in iaculis nunc sed. Eu volutpat odio facilisis
        mauris sit amet. Nunc mi ipsum faucibus vitae. Egestas egestas fringilla
        phasellus faucibus. Quam elementum pulvinar etiam non quam lacus
        suspendisse faucibus interdum. Turpis egestas integer eget aliquet nibh
        praesent tristique magna. Purus semper eget duis at tellus at urna
        condimentum. Mollis nunc sed id semper risus in hendrerit gravida. Leo a
        diam sollicitudin tempor id eu nisl nunc mi. At consectetur lorem donec
        massa sapien faucibus et molestie ac. Pharetra diam sit amet nisl
        suscipit adipiscing bibendum est. Sit amet mattis vulputate enim nulla
        aliquet porttitor lacus luctus. Arcu ac tortor dignissim convallis
        aenean et tortor at risus. Habitasse platea dictumst vestibulum rhoncus
        est. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed.
        Id leo in vitae turpis massa sed elementum tempus egestas. Euismod nisi
        porta lorem mollis. Bibendum ut tristique et egestas. Aliquam vestibulum
        morbi blandit cursus risus at ultrices mi. Sit amet facilisis magna
        etiam tempor orci eu lobortis elementum. Vehicula ipsum a arcu cursus
        vitae congue mauris rhoncus. Dignissim suspendisse in est ante in. Vitae
        proin sagittis nisl rhoncus mattis rhoncus urna. Amet aliquam id diam
        maecenas. Id diam vel quam elementum pulvinar etiam non quam. Ipsum
        dolor sit amet consectetur. Sapien faucibus et molestie ac feugiat sed
        lectus vestibulum mattis. Massa tincidunt dui ut ornare lectus sit amet
        est. Scelerisque purus semper eget duis at tellus at urna. Nascetur
        ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Dui
        faucibus in ornare quam viverra orci sagittis eu. In fermentum et
        sollicitudin ac orci phasellus egestas tellus rutrum. Est ullamcorper
        eget nulla facilisi etiam dignissim diam quis enim. In nulla posuere
        sollicitudin aliquam ultrices. Facilisi cras fermentum odio eu feugiat
        pretium nibh. Adipiscing enim eu turpis egestas pretium aenean pharetra.
        Scelerisque fermentum dui faucibus in ornare. Odio aenean sed adipiscing
        diam donec. Nec feugiat in fermentum posuere urna nec tincidunt. Lectus
        arcu bibendum at varius vel pharetra vel turpis nunc. Aliquet bibendum
        enim facilisis gravida neque convallis a cras semper. Et leo duis ut
        diam quam nulla. Sit amet volutpat consequat mauris. Viverra tellus in
        hac habitasse platea dictumst vestibulum rhoncus est. Risus nullam eget
        felis eget nunc. Arcu non sodales neque sodales ut etiam. Et tortor at
        risus viverra adipiscing at in. In mollis nunc sed id semper risus in
        hendrerit gravida. Sed vulputate mi sit amet mauris commodo. Elementum
        facilisis leo vel fringilla. Bibendum est ultricies integer quis auctor
        elit sed vulputate mi. Quam viverra orci sagittis eu volutpat. Amet
        consectetur adipiscing elit pellentesque habitant morbi. Risus in
        hendrerit gravida rutrum. Et malesuada fames ac turpis egestas sed
        tempus urna. Fames ac turpis egestas integer. Lobortis elementum nibh
        tellus molestie nunc. Morbi blandit cursus risus at ultrices mi tempus
        imperdiet nulla. Lorem donec massa sapien faucibus. Laoreet id donec
        ultrices tincidunt arcu. Habitasse platea dictumst vestibulum rhoncus
        est pellentesque elit. Neque convallis a cras semper auctor neque vitae.
        Tempus urna et pharetra pharetra massa massa ultricies. Nam libero justo
        laoreet sit amet cursus sit. Massa enim nec dui nunc mattis enim ut
        tellus elementum. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Viverra nibh cras pulvinar mattis nunc. Ridiculus mus mauris vitae
        ultricies. Posuere ac ut consequat semper viverra. Lorem ipsum dolor sit
        amet consectetur adipiscing elit ut aliquam. Erat imperdiet sed euismod
        nisi. Dapibus ultrices in iaculis nunc sed. Eu volutpat odio facilisis
        mauris sit amet. Nunc mi ipsum faucibus vitae. Egestas egestas fringilla
        phasellus faucibus. Quam elementum pulvinar etiam non quam lacus
        suspendisse faucibus interdum. Turpis egestas integer eget aliquet nibh
        praesent tristique magna. Purus semper eget duis at tellus at urna
        condimentum. Mollis nunc sed id semper risus in hendrerit gravida. Leo a
        diam sollicitudin tempor id eu nisl nunc mi. At consectetur lorem donec
        massa sapien faucibus et molestie ac. Pharetra diam sit amet nisl
        suscipit adipiscing bibendum est. Sit amet mattis vulputate enim nulla
        aliquet porttitor lacus luctus. Arcu ac tortor dignissim convallis
        aenean et tortor at risus. Habitasse platea dictumst vestibulum rhoncus
        est. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed.
        Id leo in vitae turpis massa sed elementum tempus egestas. Euismod nisi
        porta lorem mollis. Bibendum ut tristique et egestas. Aliquam vestibulum
        morbi blandit cursus risus at ultrices mi. Sit amet facilisis magna
        etiam tempor orci eu lobortis elementum. Vehicula ipsum a arcu cursus
        vitae congue mauris rhoncus. Dignissim suspendisse in est ante in. Vitae
        proin sagittis nisl rhoncus mattis rhoncus urna. Amet aliquam id diam
        maecenas. Id diam vel quam elementum pulvinar etiam non quam. Ipsum
        dolor sit amet consectetur. Sapien faucibus et molestie ac feugiat sed
        lectus vestibulum mattis. Massa tincidunt dui ut ornare lectus sit amet
        est. Scelerisque purus semper eget duis at tellus at urna. Nascetur
        ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Dui
        faucibus in ornare quam viverra orci sagittis eu. In fermentum et
        sollicitudin ac orci phasellus egestas tellus rutrum. Est ullamcorper
        eget nulla facilisi etiam dignissim diam quis enim. In nulla posuere
        sollicitudin aliquam ultrices. Facilisi cras fermentum odio eu feugiat
        pretium nibh. Adipiscing enim eu turpis egestas pretium aenean pharetra.
        Scelerisque fermentum dui faucibus in ornare. Odio aenean sed adipiscing
        diam donec. Nec feugiat in fermentum posuere urna nec tincidunt. Lectus
        arcu bibendum at varius vel pharetra vel turpis nunc. Aliquet bibendum
        enim facilisis gravida neque convallis a cras semper. Et leo duis ut
        diam quam nulla. Sit amet volutpat consequat mauris. Viverra tellus in
        hac habitasse platea dictumst vestibulum rhoncus est. Risus nullam eget
        felis eget nunc. Arcu non sodales neque sodales ut etiam. Et tortor at
        risus viverra adipiscing at in. In mollis nunc sed id semper risus in
        hendrerit gravida. Sed vulputate mi sit amet mauris commodo. Elementum
        facilisis leo vel fringilla. Bibendum est ultricies integer quis auctor
        elit sed vulputate mi. Quam viverra orci sagittis eu volutpat. Amet
        consectetur adipiscing elit pellentesque habitant morbi. Risus in
        hendrerit gravida rutrum. Et malesuada fames ac turpis egestas sed
        tempus urna. Fames ac turpis egestas integer. Lobortis elementum nibh
        tellus molestie nunc. Morbi blandit cursus risus at ultrices mi tempus
        imperdiet nulla. Lorem donec massa sapien faucibus. Laoreet id donec
        ultrices tincidunt arcu. Habitasse platea dictumst vestibulum rhoncus
        est pellentesque elit. Neque convallis a cras semper auctor neque vitae.
        Tempus urna et pharetra pharetra massa massa ultricies. Nam libero justo
        laoreet sit amet cursus sit. Massa enim nec dui nunc mattis enim ut
        tellus elementum.
        <h1>Dynamic Header</h1>
      </div>
    </header>
  );
};
export default Header;
