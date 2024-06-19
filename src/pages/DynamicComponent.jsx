import React, { Suspense } from 'react'
import { useParams } from 'react-router-dom'
const componentMap = {
  searchbar: React.lazy(() =>
    import("../Component/Searchbar/SearchbarView.jsx")
  ),
  "searchbar with pagination": React.lazy(() =>
    import("../Component/SearchWithPaginationView/SearchWithPaginationView.jsx")
  ),
  "emp-toggle": React.lazy(() =>
    import("../Component/EmployeeToggleView/EmployeeToggleView.jsx")
  ),
  "star-rating": React.lazy(() =>
    import("../Component/StartRating/StarRatingView.jsx")
  ),
  stopwatch: React.lazy(() =>
    import("../Component/Stopwatch/StopwatchView.jsx")
  ),
  "countdown-timer": React.lazy(() =>
    import("../Component/CountdownTimerView/CountdownTimerView.jsx")
  ),
  "password-generator": React.lazy(() =>
    import("../Component/PasswordGenerator/PasswordgeneratorView.jsx")
  ),
  "to-do-list": React.lazy(() =>
    import("../Component/TodoListView/TodoListView.jsx")
  ),
  modal: React.lazy(() => import("../Component/Modal/ModalView.jsx")),
  "progress-bar": React.lazy(() =>
    import("../Component/ProgressBar/ProgressBar.jsx")
  ),
  accordian: React.lazy(() =>
    import("../Component/Accordian/Accordian.jsx")
  ),
};

const DynamicComponent = () => {
    const {name}=useParams()

    const Component=componentMap[name]
     if (!Component) {
       return <h1>Component not found</h1>;
     }
  return (
    <div style={{width:"98vw",height:"90vh",margin:"0px auto",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Suspense fallback={<h1>Loading...</h1>}>
            <Component/>
        </Suspense>
    
    
    </div>
  )
}

export default DynamicComponent