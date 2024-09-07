import React from "react";
import { Routes, Route } from "react-router-dom";
import {
PerformanceAppraisalCreate, PerformanceAppraisalEdit, PerformanceAppraisalView, 
PerformanceAppraisals
} from "screens";

const Component = (props) => {

    return (
        <Routes>
            

                        
                                                        <Route path="PerformanceAppraisals/view/:id" element={<PerformanceAppraisalView {...props} title={'View PerformanceAppraisal'} />} />
                        <Route path="PerformanceAppraisals/edit/:id" element={<PerformanceAppraisalEdit {...props} title={'Edit PerformanceAppraisal'} />} />
                        <Route path="PerformanceAppraisals/create" element={<PerformanceAppraisalCreate {...props} title={'Create PerformanceAppraisal'} />} />
                                                <Route path="/" element={<PerformanceAppraisals {...props} title={'Table Layout'} nolistbar={true} />} />

                <Route path="/products25" element={<PerformanceAppraisals {...props} title={'Table Layout'} />} />
        </Routes>
    )

};

export default Component;