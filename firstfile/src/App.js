
function App() {
  return (
    <div className="App">
      <h1>Chai aur react</h1>
      <h4>
        In this let's do first setup for react application
      </h4>
      <ol>

        <li>At first open vs code before that download node js and add its bin flider to env variable</li>
        <li>Then click on terminal</li>
      <li>Now install npm by "pip install npm" </li>
      <li>Now write "npx create-react-app "filename""</li>
      <li>You need to understand that we can create react application by two way or more, firstly we can do it by react and secondly by vite</li>
      <li>These create-react-app is a framework which is a big framework and loading jyada hota h laptop ka</li>
      <li>But vite is mostly used in our case bcoz ye ek utility hai means bundles of files which is a lot more lighter</li>
      <li>Now ab aage badhte hai, after npx command make changes in src file and delete all files except js file inside src and go to terminal and write "npm run start"</li>
      <li>go to your filename and then run start script only</li>
      <li>It will start your react application and run on server</li>
      <li>Ek baar package.json me jaa ke build ko dekho</li>
      <li>build script ka mtlb hota hai ki jb aapki application production me jaa rhi ho to phir browser ko aap konsi file provide kraoge.</li>
      <li>wo check krne ke liye "npm run build" ye aapko set of file degi jo aap hi ki js,css,html file h jo ki production ke liye browser ke paas jaa rhi hai</li>
      </ol>
      
    </div>
  );
}

export default App;
