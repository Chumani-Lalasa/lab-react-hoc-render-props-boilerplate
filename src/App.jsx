import './App.css';
import LikeImage from './components/Project-HOC/LikeImage';
import LikePost from './components/Project-HOC/LikePost';
import LikeImage3 from './components/Project-Render/LikeImage3';
import LikePost3 from './components/Project-Render/LikePost3';
import RenderProps from './components/Project-Render/RenderProps';

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
        <LikePost/>
         <LikeImage/>
      </div>

        {/* Project RenderProps */}
        <h3>Some more Blogs</h3>
        <div className='buttons'>
          <RenderProps 
            render= {(count,handleCount) => (
              <LikePost3 count={count} handleCount={handleCount}/>
            )}
          />
          <RenderProps 
            render= {(count,handleCount) => (
              <LikeImage3 count={count} handleCount={handleCount}/>
            )}
          />
        </div>
    </div>
  );
}

export default App;
