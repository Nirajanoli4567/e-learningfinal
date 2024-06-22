import { useState } from "react";
import { Dialog } from "../../components/common/Dialog";
import { logout } from "../../utils/auth.helper";

export const TodoLanding = ()=>{
    let a = 5;
    const [count, setCount] = useState(0);
    const [content, setContent] = useState(false);
    const incCount=(val = 1)=> setCount(count + val);
    
    const showContent=()=>{
        setContent(!content);
    }
    return <main>
        <section className="todo-section">
            <div className="flex">
                <button  onClick={()=>incCount(-1)}>Decrease Count</button>
                <h1>{count}</h1>
                <button  onClick={()=>incCount(1)}>Increase Count</button>

            </div>
           {/* { content ?  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium vitae, sunt officia autem iure perspiciatis quo quam temporibus error cum minima voluptate sed ipsa repellendus beatae modi id nobis dolor.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium vitae, sunt officia autem iure perspiciatis quo quam temporibus error cum minima voluptate sed ipsa repellendus beatae modi id nobis dolor.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium vitae, sunt officia autem iure perspiciatis quo quam temporibus error cum minima voluptate sed ipsa repellendus beatae modi id nobis dolor.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium vitae, sunt officia autem iure perspiciatis quo quam temporibus error cum minima voluptate sed ipsa repellendus beatae modi id nobis dolor.
            </p>: <div> No content</div>} */}

            <button onClick={()=>setContent(true)}>Show content</button>
            <Dialog show={content} close={()=>setContent(false)}>
                Content from todos
            </Dialog>
            <button onClick={logout}>Logout</button>
            </section>
    </main>
}