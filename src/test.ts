// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);








// <!-- Mobile Apps -->  
// <section id="our-apps" class="padding">
// <div class="container">

//     <!-- Navigation -->
//     <div class="row">
//         <div class="col-md-12 col-sm-12 text-center">
//             <div class="heading-title wow fadeInDown heading_space" data-wow-delay="300ms">
//                 <h2 class="darkcolor">Asthma Symptoms Questionaires</h2>
//                 <span class="" style="font-size: 16px; width: 80%; margin: auto">The most important aspect of asthma management is the overall control of your child’s illness. After a confirmed diagnosis of asthma, parents can assess their child’s current asthma control status by answering a set of questions related to frequency of occurrence of the symptoms, the frequency of use of reliever medications and measures of lung function like FEV (Forced Expiratory Volume).</span>
//             </div>
//         </div>
//     </div>

//     <!-- QUestions -->
//     <div class="row" id="app-feature">
//         <div class="col-lg-3 col-md-3 col-sm-12">
//             <div class="content-left clearfix">
//             <div class="feature-item left top30 bottom30 wow fadeInLeft" id="symp-good-control" data-wow-delay="300ms">
//                 <span class="icon card-header-primary"><i class="fa fa-thumbs-up"></i></span>
//                 <div class="text">
//                     <h4>Good Control Asthma</h4>
//                     <p>Do we need a short description here?</p>
//                 </div>
//             </div>
//             <div class="feature-item left top30 bottom30 wow fadeInLeft" id="symp-partial-control" data-wow-delay="400ms">
//                 <span class="icon"><i class="fa fa-balance-scale"></i></span>
//                 <div class="text">
//                     <h4>Partial Control Asthma</h4>
//                     <p>Do we need a short description here?</p>
//                 </div>
//             </div>
//             <div class="feature-item left top30 bottom30 wow fadeInLeft" id="symp-bad-control" data-wow-delay="500ms">
//                 <span class="icon"><i class="fa fa-thumbs-down"></i></span>
//                 <div class="text">
//                     <h4>Bad Control Asthma</h4>
//                     <p>Do we need a short description here?</p>
//                 </div>
//             </div>
//             </div>
//         </div>
//         <div class="col-lg-9 col-md-9 col-sm-12" style="padding-left: 50px">
//             <div class="content-right clearfix">

//                 <!-- Google Control-->
//                     <div class="feature-item right top30 bottom30 left30 wow fadeInRight" id="symp-good-control-child">
//                         <table class="table table-bordered">
//                             <tr class="card-header-success justify-content-center">
//                                 <th>Have you experienced any of the following more than the given timeframe?</th>
//                                 <th>Yes</th>
//                                 <th>No</th>
//                             </tr>
//                             <!-- Line 1 -->
//                             <tr>
//                             <td>Less than 2 times per week have Asthma symtoms at <strong>Daytime</strong></td>
//                             <td>
//                                 <div class="form-check">
//                                     <label class="form-check-label">
//                                         <input class="form-check-input" type="radio" value="" name="good-q1">
//                                         <span class="form-check-sign">
//                                             <span class="check"></span>
//                                         </span>
//                                     </label>
//                                 </div>
//                             </td>
//                             <td>
//                                 <div class="form-check">
//                                     <label class="form-check-label">
//                                         <input class="form-check-input" type="radio" value="" name="good-q1">
//                                         <span class="form-check-sign">
//                                             <span class="check"></span>
//                                         </span>
//                                     </label>
//                                 </div>
//                             </td>
//                             </tr>
//                             <!-- /Line 1 -->
//                             <!-- Line 2 -->
//                             <tr>
//                                 <td>Less than 1 time per week have athma symptoms at <strong>Night time</strong> which caused sleep disruption</td>
//                                 <td>
//                                     <div class="form-check">
//                                         <label class="form-check-label">
//                                             <input class="form-check-input" type="radio" value="" name="good-q2">
//                                             <span class="form-check-sign">
//                                                 <span class="check"></span>
//                                             </span>
//                                         </label>
//                                     </div>
//                                 </td>
//                                 <td>
//                                     <div class="form-check">
//                                         <label class="form-check-label">
//                                             <input class="form-check-input" type="radio" value="" name="good-q2">
//                                             <span class="form-check-sign">
//                                                 <span class="check"></span>
//                                             </span>
//                                         </label>
//                                     </div>
//                                 </td>
//                                 </tr>
//                                 <!-- /Line 2 -->
//                                 <!-- Line 3 -->
//                                 <tr>
//                                 <td>In last 2 weeks, <strong>no</strong> extent of asthma interfered with your child’s routine life, including his ability to play, go to school or participate in any activity compared to other children of his/her age.</td>
//                                 <td>
//                                     <div class="form-check">
//                                         <label class="form-check-label">
//                                             <input class="form-check-input" type="checkbox" value="">
//                                             <span class="form-check-sign">
//                                                 <span class="check"></span>
//                                             </span>
//                                         </label>
//                                     </div>
//                                 </td>
//                                 <td>
//                                     <div class="form-check">
//                                         <label class="form-check-label">
//                                             <input class="form-check-input" type="checkbox" value="">
//                                             <span class="form-check-sign">
//                                                 <span class="check"></span>
//                                             </span>
//                                         </label>
//                                     </div>
//                                 </td>
//                                 </tr>
//                                 <!-- /Line 3 -->
//                                 <!-- Line 4 -->
//                                 <tr>
//                                 <td>In last 2 weeks, <strong>less than or equal to 2 times</strong> that your child used asthma reliever medication to get quick relief from the symptoms.</td>
//                                 <td>
//                                     <div class="form-check">
//                                         <label class="form-check-label">
//                                             <input class="form-check-input" type="checkbox" value="">
//                                             <span class="form-check-sign">
//                                                 <span class="check"></span>
//                                             </span>
//                                         </label>
//                                     </div>
//                                 </td>
//                                 <td>
//                                     <div class="form-check">
//                                         <label class="form-check-label">
//                                             <input class="form-check-input" type="checkbox" value="">
//                                             <span class="form-check-sign">
//                                                 <span class="check"></span>
//                                             </span>
//                                         </label>
//                                     </div>
//                                 </td>
//                                 </tr>
//                                 <!-- /Line 4 -->
//                                 <!-- Line 5 -->
//                                 <tr>
//                                 <td>In the last 2 weeks, was the recorded Forced expiratory volume (FEV) greater than 80%?</td>
//                                 <td>
//                                     <div class="form-check">
//                                         <label class="form-check-label">
//                                             <input class="form-check-input" type="checkbox" value="">
//                                             <span class="form-check-sign">
//                                                 <span class="check"></span>
//                                             </span>
//                                         </label>
//                                     </div>
//                                 </td>
//                                 <td>
//                                     <div class="form-check">
//                                         <label class="form-check-label">
//                                             <input class="form-check-input" type="checkbox" value="">
//                                             <span class="form-check-sign">
//                                                 <span class="check"></span>
//                                             </span>
//                                         </label>
//                                     </div>
//                                 </td>
//                                 </tr>
//                                 <!-- /Line 5 -->
//                         </table>
//                     </div>
//                 <!-- /Good Control -->
                
//                 <!-- Partial Control -->
//                 <div class="feature-item right top30 bottom30 left30" style="display:none" id="symp-partial-control-child">
//                     <table class="table table-bordered">
//                         <tr class="card-header-warning justify-content-center">
//                         <th>Have you experienced any of the following more than the given timeframe?</th>
//                         <th>Yes</th>
//                         <th>No</th>
//                         </tr>
//                         <!-- Line 1 -->
//                         <tr>
//                         <td>Between 2 times and 4 times per week have Asthma symtoms at <strong>Daytime</strong></td>
//                         <td>
//                             <div class="form-check">
//                                 <label class="form-check-label">
//                                     <input class="form-check-input" type="checkbox" value="">
//                                     <span class="form-check-sign">
//                                         <span class="check"></span>
//                                     </span>
//                                 </label>
//                             </div>
//                         </td>
//                         <td>
//                             <div class="form-check">
//                                 <label class="form-check-label">
//                                     <input class="form-check-input" type="checkbox" value="">
//                                     <span class="form-check-sign">
//                                         <span class="check"></span>
//                                     </span>
//                                 </label>
//                             </div>
//                         </td>
//                         </tr>
//                         <!-- /Line 1 -->
//                         <!-- Line 2 -->
//                         <tr>
//                             <td>Between 2 times and 3 times per week have athma symptoms at <strong>Night time</strong> which caused sleep disruption</td>
//                             <td>
//                                 <div class="form-check">
//                                     <label class="form-check-label">
//                                         <input class="form-check-input" type="checkbox" value="">
//                                         <span class="form-check-sign">
//                                             <span class="check"></span>
//                                         </span>
//                                     </label>
//                                 </div>
//                             </td>
//                             <td>
//                                 <div class="form-check">
//                                     <label class="form-check-label">
//                                         <input class="form-check-input" type="checkbox" value="">
//                                         <span class="form-check-sign">
//                                             <span class="check"></span>
//                                         </span>
//                                     </label>
//                                 </div>
//                             </td>
//                             </tr>
//                             <!-- /Line 2 -->
//                             <!-- Line 3 -->
//                             <tr>
//                             <td>In last 2 weeks, <strong>some limitations</strong> extent of asthma interfered with your child’s routine life, including his ability to play, go to school or participate in any activity compared to other children of his/her age.</td>
//                             <td>
//                                 <div class="form-check">
//                                     <label class="form-check-label">
//                                         <input class="form-check-input" type="checkbox" value="">
//                                         <span class="form-check-sign">
//                                             <span class="check"></span>
//                                         </span>
//                                     </label>
//                                 </div>
//                             </td>
//                             <td>
//                                 <div class="form-check">
//                                     <label class="form-check-label">
//                                         <input class="form-check-input" type="checkbox" value="">
//                                         <span class="form-check-sign">
//                                             <span class="check"></span>
//                                         </span>
//                                     </label>
//                                 </div>
//                             </td>
//                             </tr>
//                             <!-- /Line 3 -->
//                             <!-- Line 4 -->
//                             <tr>
//                             <td>In last 2 weeks, <strong>between 2 to 5 times</strong>> your child used asthma reliever medication to get quick relief from the symptoms.</td>
//                             <td>
//                                 <div class="form-check">
//                                     <label class="form-check-label">
//                                         <input class="form-check-input" type="checkbox" value="">
//                                         <span class="form-check-sign">
//                                             <span class="check"></span>
//                                         </span>
//                                     </label>
//                                 </div>
//                             </td>
//                             <td>
//                                 <div class="form-check">
//                                     <label class="form-check-label">
//                                         <input class="form-check-input" type="checkbox" value="">
//                                         <span class="form-check-sign">
//                                             <span class="check"></span>
//                                         </span>
//                                     </label>
//                                 </div>
//                             </td>
//                             </tr>
//                             <!-- /Line 4 -->
//                             <!-- Line 5 -->
//                             <tr>
//                             <td>In the last 2 weeks, was the recorded Forced expiratory volume (FEV) between 60% - 80%?</td>
//                             <td>
//                                 <div class="form-check">
//                                     <label class="form-check-label">
//                                         <input class="form-check-input" type="checkbox" value="">
//                                         <span class="form-check-sign">
//                                             <span class="check"></span>
//                                         </span>
//                                     </label>
//                                 </div>
//                             </td>
//                             <td>
//                                 <div class="form-check">
//                                     <label class="form-check-label">
//                                         <input class="form-check-input" type="checkbox" value="">
//                                         <span class="form-check-sign">
//                                             <span class="check"></span>
//                                         </span>
//                                     </label>
//                                 </div>
//                             </td>
//                             </tr>
//                             <!-- /Line 5 -->
//                     </table>
//                 </div>
//                 <!-- /Partial Control -->

//                 <!-- Bad Control -->
//                 <div class="feature-item right top30 bottom30 left30" style="display:none" id="symp-bad-control-child">
//                     <table class="table table-bordered">
//                         <tr class="card-header-danger justify-content-center">
//                         <th>Have you experienced any of the following more than the given timeframe?</th>
//                         <th>Yes</th>
//                         <th>No</th>
//                         </tr>
//                         <!-- Line 1 -->
//                         <tr>
//                         <td>More than 5 times per week have Asthma symtoms at <strong>Daytime</strong></td>
//                         <td>
//                             <div class="form-check">
//                                 <label class="form-check-label">
//                                     <input class="form-check-input" type="checkbox" value="">
//                                     <span class="form-check-sign">
//                                         <span class="check"></span>
//                                     </span>
//                                 </label>
//                             </div>
//                         </td>
//                         <td>
//                             <div class="form-check">
//                                 <label class="form-check-label">
//                                     <input class="form-check-input" type="checkbox" value="">
//                                     <span class="form-check-sign">
//                                         <span class="check"></span>
//                                     </span>
//                                 </label>
//                             </div>
//                         </td>
//                         </tr>
//                         <!-- /Line 1 -->
//                         <!-- Line 2 -->
//                         <tr>
//                             <td>More than 4 time per week have athma symptoms at <strong>Night time</strong> which caused sleep disruption</td>
//                             <td>
//                                 <div class="form-check">
//                                     <label class="form-check-label">
//                                         <input class="form-check-input" type="checkbox" value="">
//                                         <span class="form-check-sign">
//                                             <span class="check"></span>
//                                         </span>
//                                     </label>
//                                 </div>
//                             </td>
//                             <td>
//                                 <div class="form-check">
//                                     <label class="form-check-label">
//                                         <input class="form-check-input" type="checkbox" value="">
//                                         <span class="form-check-sign">
//                                             <span class="check"></span>
//                                         </span>
//                                     </label>
//                                 </div>
//                             </td>
//                             </tr>
//                             <!-- /Line 2 -->
//                             <!-- Line 3 -->
//                             <tr>
//                             <td>In last 2 weeks, <strong>extreme limitations</strong> extent of asthma interfered with your child’s routine life, including his ability to play, go to school or participate in any activity compared to other children of his/her age.</td>
//                             <td>
//                                 <div class="form-check">
//                                     <label class="form-check-label">
//                                         <input class="form-check-input" type="checkbox" value="">
//                                         <span class="form-check-sign">
//                                             <span class="check"></span>
//                                         </span>
//                                     </label>
//                                 </div>
//                             </td>
//                             <td>
//                                 <div class="form-check">
//                                     <label class="form-check-label">
//                                         <input class="form-check-input" type="checkbox" value="">
//                                         <span class="form-check-sign">
//                                             <span class="check"></span>
//                                         </span>
//                                     </label>
//                                 </div>
//                             </td>
//                             </tr>
//                             <!-- /Line 3 -->
//                             <!-- Line 4 -->
//                             <tr>
//                             <td>In last 2 weeks, <strong>more than 5 times</strong>> your child used asthma reliever medication to get quick relief from the symptoms.</td>
//                             <td>
//                                 <div class="form-check">
//                                     <label class="form-check-label">
//                                         <input class="form-check-input" type="checkbox" value="">
//                                         <span class="form-check-sign">
//                                             <span class="check"></span>
//                                         </span>
//                                     </label>
//                                 </div>
//                             </td>
//                             <td>
//                                 <div class="form-check">
//                                     <label class="form-check-label">
//                                         <input class="form-check-input" type="checkbox" value="">
//                                         <span class="form-check-sign">
//                                             <span class="check"></span>
//                                         </span>
//                                     </label>
//                                 </div>
//                             </td>
//                             </tr>
//                             <!-- /Line 4 -->
//                             <!-- Line 5 -->
//                             <tr>
//                             <td>In the last 2 weeks, was the recorded Forced expiratory volume (FEV) less than 80%?</td>
//                             <td>
//                                 <div class="form-check">
//                                     <label class="form-check-label">
//                                         <input class="form-check-input" type="checkbox" value="">
//                                         <span class="form-check-sign">
//                                             <span class="check"></span>
//                                         </span>
//                                     </label>
//                                 </div>
//                             </td>
//                             <td>
//                                 <div class="form-check">
//                                     <label class="form-check-label">
//                                         <input class="form-check-input" type="checkbox" value="">
//                                         <span class="form-check-sign">
//                                             <span class="check"></span>
//                                         </span>
//                                     </label>
//                                 </div>
//                             </td>
//                             </tr>
//                             <!-- /Line 5 -->
//                     </table>
//                 </div>
//                 <!-- /Bad Control -->

//             </div>
//         </div>
//     </div>

//     <!-- Marking -->
//     <div class="row">
//         <div class="cbp-item float-right">
//         <div class="bottom-text ">
//             <div class="cells  wow fadeIn" data-wow-delay="350ms">
//                 <p>You have completed </p>
//                 <h2 class="port_head gradient_text" id="score-counter">80</h2>
//                 <p class="bottom15"> percent of the survey</p>
//             </div>
//             <div class="cells wow fadeIn" data-wow-delay="350ms">
//                 <a href="#" class="button btnsecondary btn-gradient-hvr" id="score-submit-btn">Submit</a>
//             </div>
//         </div>
//         </div>
//     </div>
// </div>
// </section>                                                                                 
// <!--Mobile Apps ends-->  
