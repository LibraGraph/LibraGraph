import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import ChatSection from './components/ChatSection';
import LibraBot from './components/LibraBot';
import ChatBot from './components/ChatBot'; // Adjusted import for ChatBot
import BookSearch from './components/BookSearch'; // Importing BookSearch

const App = () => {
  const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      amazonLink: "https://www.amazon.in/Great-Gatsby-F-Scott-Fitzgerald/dp/8172344562/ref=sr_1_2_sspa?adgrpid=1316117028143635&dib=eyJ2IjoiMSJ9.KkxZmFzM_IKm5sHW93r-T2Zj4mHIKYexiSdFR9UwBy7nTvEOh5GHSSutQ0liSSdg7Bm1av-TKD6Ngvp-J7I5ZCdCbfVUfNsa6FIRWN0_LkrAvP3LAE4x3y8CsGXO_bjBIiDWF1iv-Ib_P-eEmeB3dmRebczU2ysMrHOmB2AciyRSPKiPFX6U9zdQuGOiFZDQepmCVUaqfPhXKjicpggC11-KdY17m9vnA_y825ZNqwE.uuA730JP2Oax-PIaXBMqXbba66Ho2qNqCJqeIaf7PYw&dib_tag=se&hvadid=82257584953083&hvbmt=be&hvdev=c&hvlocphy=155797&hvnetw=o&hvqmt=e&hvtargid=kwd-82258194450215%3Aloc-90&hydadcr=23642_2291791&keywords=great+gatsby&msclkid=9346644cdff3151820e302bf464353d0&qid=1727240628&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
      image: "https://th.bing.com/th/id/OIP.gv0h6k9HASgRqPKstjh3_AHaEo?w=280&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      amazonLink: "https://www.amazon.com/dp/0451524934",
      image: "https://th.bing.com/th/id/OIP.kbMxdBWJd1dEmqtbRqHa5wHaLX?w=801&h=1230&rs=1&pid=ImgDetMain",
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      amazonLink: "https://www.amazon.in/Kill-Mockingbird-Harper-Lee/dp/0099549484#:~:text='Shoot%20all%20the%20bluejays%20you%20want,%20if%20you",
      image: "https://th.bing.com/th/id/R.d8633102a0a922dc5a8b52d86cf96627?rik=eT%2fzYY8zCWVH4A&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f4%2f4f%2fTo_Kill_a_Mockingbird_(first_edition_cover).jpg&ehk=5ktDTwUjcGvaYynHPtvUcUDBh67RbLzGc0B5eYMR%2fUo%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      amazonLink: "https://www.amazon.in/Pride-Prejudice-Jane-Austen/dp/8172344503#:~:text=Immerse%20yourself%20in%20the%20enchanting%20world",
      image: "https://flxt.tmsimg.com/assets/p16161151_b_v10_aa.jpg",
    },
    {
      id: 5,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      amazonLink: "https://www.amazon.in/s?k=the+catcher+in+rye&adgrpid=1328211653908990&hvadid=83013498736106&hvbmt=be&hvdev=c&hvlocphy=155797&hvnetw=o&hvqmt=e&hvtargid=kwd-83014108123663%3Aloc-90&hydadcr=23636_2291792&msclkid=ddcaafae4bc912d464ebc95dd5d73ccf&tag=msndeskstdin-21&ref=pd_sl_1oiwysf7uu_e",
      image: "https://th.bing.com/th/id/R.cac52fbbefa83812774f681dbf874163?rik=v%2bHq2yBp%2f6RzYw&riu=http%3a%2f%2fmedia.npr.org%2fassets%2fbakertaylor%2fcovers%2fc%2fcatcher-in-the-rye%2f9780316769488_custom-b6fc2e108f3865eb320720875c20e4f869da8065-s6-c30.jpg&ehk=fpDBmQJbSuHhhoBl2AYOifBz0QLtjPI7FBgIYnU65cM%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: 6,
      title: "Moby Dick",
      author: "Herman Melville",
      amazonLink: "https://www.amazon.com/dp/1503280780",
      image: "https://th.bing.com/th/id/OIP.M7lAD82M2Rj8nI9BZEuHjQHaLH?rs=1&pid=ImgDetMain",
    },
    {
      id: 7,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      amazonLink: "https://www.amazon.com/dp/054792822X",
      image: "https://th.bing.com/th/id/OIP.FQZErpcn4eQqdkG8_s7M3gHaKz?rs=1&pid=ImgDetMain",
    },
    {
      id: 8,
      title: "Fahrenheit 451",
      author: "Ray Bradbury",
      amazonLink: "https://www.amazon.com/dp/1451673310",
      image: "https://www.adrionltd.com/89934-thickbox_default/fahrenheit-451.jpg",
    },
    {
      id: 9,
      title: "The Alchemist",
      author: "Paulo Coelho",
      amazonLink: "https://www.amazon.com/dp/0062315001",
      image: "https://images-na.ssl-images-amazon.com/images/I/71kW0sEdbpL.jpg",
    },
    {
      id: 10,
      title: "War and Peace",
      author: "Leo Tolstoy",
      amazonLink: "https://www.amazon.com/dp/1420954308",
      image: "https://images-na.ssl-images-amazon.com/images/I/91qC72pD5aL.jpg",
    },
    // Add more books as needed
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-slate-100">
      <Header />
      <div className="flex-grow">
        <MainContent />
        <BookSearch books={books} />
      </div>
      <ChatBot books={books} /> {/* Pass books data to ChatBot */}
      <ChatSection />
      <LibraBot />
    </div>
  );
  
};

export default App;
