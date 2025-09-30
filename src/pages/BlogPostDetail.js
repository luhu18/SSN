// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import client from '../contentfulClient'; // Import Contentful client
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer'; // For rendering Rich Text
// import { BLOCKS, INLINES } from '@contentful/rich-text-types'; // For defining Rich Text rendering options
// import PageHeader from '../components/PageHeader'; // Assuming you have this component

// const BlogPostDetail = () => {
//   const { slug } = useParams(); // Get the slug from the URL parameters
//   const navigate = useNavigate(); // Hook for programmatic navigation
//   const [post, setPost] = useState(null); // State to store the fetched blog post
//   const [loading, setLoading] = useState(true); // State for loading status
//   const [error, setError] = useState(null); // State for error messages

//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         // Fetch entries from Contentful with content_type 'blogPost'
//         // Filter by the 'slug' field to find the specific post
//         const response = await client.getEntries({
//           content_type: 'blogPost',
//           'fields.slug': slug, // Filter by the slug matching the URL parameter
//           limit: 1, // Expect only one result
//         });

//         // Check if a post was found
//         if (response.items.length > 0) {
//           const item = response.items[0];
//           setPost({
//             id: item.sys.id,
//             slug: item.fields.slug,
//             title: item.fields.title,
//             date: new Date(item.fields.date).toLocaleDateString('en-US', {
//               year: 'numeric',
//               month: 'long',
//               day: 'numeric',
//             }),
//             summary: item.fields.summary,
//             content: item.fields.content, // This is the Rich Text JSON object
//             // Get the image URL, ensuring it's prefixed with 'https:'
//             image: item.fields.featuredImage?.fields?.file?.url
//               ? `https:${item.fields.featuredImage.fields.file.url}`
//               : 'https://placehold.co/800x450/CCCCCC/000000?text=Image+Missing', // Fallback placeholder image
//           });
//           window.scrollTo(0, 0); // Scroll to the top of the page after loading
//         } else {
//           // If no post found with that slug, navigate back to the blog list
//           navigate('/blog');
//         }
//       } catch (err) {
//         console.error("Error fetching blog post from Contentful:", err);
//         setError("Failed to load blog post. Please try again later.");
//       } finally {
//         setLoading(false); // Set loading to false
//       }
//     };

//     fetchPost(); // Call the fetch function
//   }, [slug, navigate]); // Re-run effect if slug or navigate function changes

//   // Define how Contentful Rich Text nodes should be rendered into React components
//   const renderOptions = {
//     renderNode: {
//       // Custom rendering for paragraphs
//       [BLOCKS.PARAGRAPH]: (node, children) => (
//         <p className="mb-4 text-gray-800 leading-relaxed">{children}</p>
//       ),
//       // Custom rendering for headings
//       [BLOCKS.HEADING_1]: (node, children) => (
//         <h1 className="text-4xl font-bold mb-4 text-green-800">{children}</h1>
//       ),
//       [BLOCKS.HEADING_2]: (node, children) => (
//         <h2 className="text-3xl font-bold mt-8 mb-4 text-green-700">{children}</h2>
//       ),
//       [BLOCKS.HEADING_3]: (node, children) => (
//         <h3 className="text-2xl font-semibold mt-6 mb-3 text-green-600">{children}</h3>
//       ),
//       // Custom rendering for unordered lists
//       [BLOCKS.UL_LIST]: (node, children) => (
//         <ul className="list-disc list-inside mb-4 ml-4 space-y-1">{children}</ul>
//       ),
//       // Custom rendering for ordered lists
//       [BLOCKS.OL_LIST]: (node, children) => (
//         <ol className="list-decimal list-inside mb-4 ml-4 space-y-1">{children}</ol>
//       ),
//       // Custom rendering for list items
//       [BLOCKS.LIST_ITEM]: (node, children) => (
//         <li>{children}</li>
//       ),
//       // Custom rendering for embedded assets (images)
//       [BLOCKS.EMBEDDED_ASSET]: (node) => {
//         const asset = node.data.target.fields;
//         if (asset && asset.file && asset.file.url) {
//           return (
//             <img
//               src={`https:${asset.file.url}`} // Ensure https prefix
//               alt={asset.description || asset.title || 'Embedded asset'}
//               className="my-6 rounded-lg shadow-md w-full max-h-96 object-cover" // Tailwind classes for styling
//             />
//           );
//         }
//         return null; // Return null if asset data is missing
//       },
//       // Custom rendering for hyperlinks
//       [INLINES.HYPERLINK]: (node, children) => (
//         <a href={node.data.uri} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
//           {children}
//         </a>
//       ),
//     },
//     // This renders line breaks correctly within text nodes
//     renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br key={i} />, text]),
//   };

//   // Display a loading spinner while data is being fetched
//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-50">
//         <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-500"></div>
//         <p className="ml-4 text-xl text-gray-700">Loading blog post...</p>
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

//   // Display a "not found" message if post is null after loading
//   if (!post) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-50">
//         <p className="text-xl text-gray-700">Blog post not found.</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       {/* Page Header component for the blog detail page */}
//       <PageHeader
//         title={post.title}
//         subtitle={`Published on ${post.date}`}
//         backgroundImage={post.image || "/images/programs-header.jpg"} // Use post's image or default
//       />

//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
//             <h1 className="text-4xl font-bold mb-4 text-green-800">{post.title}</h1>
//             <p className="text-gray-600 text-sm mb-6">Published on {post.date}</p>

//             {/* Render the Contentful Rich Text content */}
//             <div className="text-gray-800">
//               {documentToReactComponents(post.content, renderOptions)}
//             </div>

//             <div className="mt-10 pt-6 border-t border-gray-200">
//               {/* Button to navigate back to the blog listing page */}
//               <button
//                 onClick={() => navigate('/blog')}
//                 className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//               >
//                 ← Back to Blog Posts
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default BlogPostDetail;