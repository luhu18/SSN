// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import client from '../contentfulClient'; // Import Contentful client
// import PageHeader from '../components/PageHeader'; // Assuming you have this component

// const BlogPage = () => {
//   const [blogPosts, setBlogPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         // Fetch entries from Contentful with content_type 'blogPost'
//         // Order by date in descending order (most recent first)
//         const response = await client.getEntries({
//           content_type: 'blogPost',
//           order: '-fields.date', // Field name for date in Contentful
//         });

//         // Map the Contentful response items to a more usable format for your component
//         const formattedPosts = response.items.map(item => ({
//           id: item.sys.id, // Unique ID for the post
//           slug: item.fields.slug, // The URL-friendly slug
//           title: item.fields.title, // The title of the post
//           date: new Date(item.fields.date).toLocaleDateString('en-US', { // Format the date
//             year: 'numeric',
//             month: 'long',
//             day: 'numeric',
//           }),
//           summary: item.fields.summary, // The short summary for the listing
//           // Get the image URL, ensuring it's prefixed with 'https:' as Contentful often provides '//'
//           image: item.fields.featuredImage?.fields?.file?.url
//             ? `https:${item.fields.featuredImage.fields.file.url}`
//             : 'https://placehold.co/600x400/CCCCCC/000000?text=Image+Missing', // Fallback placeholder image
//         }));
//         setBlogPosts(formattedPosts); // Update state with fetched posts
//       } catch (err) {
//         // Log the error for debugging and set a user-friendly error message
//         console.error("Error fetching blog posts from Contentful:", err);
//         setError("Failed to load blog posts. Please try again later.");
//       } finally {
//         setLoading(false); // Set loading to false regardless of success or failure
//       }
//     };

//     fetchPosts(); // Call the fetch function when the component mounts
//   }, []); // Empty dependency array means this effect runs once after initial render

//   // Display a loading spinner while data is being fetched
//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-50">
//         <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-500"></div>
//         <p className="ml-4 text-xl text-gray-700">Loading blog posts...</p>
//       </div>
//     );
//   }

//   // Display an error message if fetching failed
//   if (error) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-red-50">
//         <p className="text-xl text-red-700">{error}</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       {/* Page Header component for the blog listing page */}
//       <PageHeader
//         title="Our Blog"
//         subtitle="Stay informed with our latest news, stories, and impact updates."
//         backgroundImage="/images/programs-header.jpg" // Default background image
//       />

//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-3xl font-bold mb-10 text-center text-green-700">Latest Posts</h2>

//             <div className="space-y-8">
//               {/* Conditionally render posts or a "no posts found" message */}
//               {blogPosts.length > 0 ? (
//                 blogPosts.map((post) => (
//                   <div key={post.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-start md:items-center">
//                     {/* Display featured image if available */}
//                     {post.image && (
//                       <div className="md:w-1/3 w-full mb-4 md:mb-0 md:mr-6 flex-shrink-0">
//                         <img
//                           src={post.image}
//                           alt={post.title}
//                           className="w-full h-48 object-cover rounded-lg shadow-sm"
//                           onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/CCCCCC/000000?text=Image+Missing'; }}
//                         />
//                       </div>
//                     )}
//                     <div className="md:w-2/3 w-full">
//                       <h3 className="text-xl font-semibold mb-2 text-green-600">{post.title}</h3>
//                       <div className="flex items-center text-gray-600 text-sm mb-3">
//                         {/* SVG icon for date */}
//                         <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                           <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
//                         </svg>
//                         <span>{post.date}</span>
//                       </div>
//                       <p className="mb-4 text-gray-700">{post.summary}</p>
//                       {/* Link to the individual blog post detail page */}
//                       <Link to={`/blog/${post.slug}`} className="text-green-600 hover:underline font-medium">Read more →</Link>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-center text-gray-600 text-lg">No blog posts found.</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default BlogPage;