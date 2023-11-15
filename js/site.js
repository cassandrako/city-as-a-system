import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// First Scene
const scene1 = new THREE.Scene();
const camera1 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer1 = new THREE.WebGLRenderer({ alpha: true });
renderer1.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer1.domElement);

const loader1 = new GLTFLoader();
loader1.load('assets/toolargebuilding.gltf', function (gltf) {
    scene1.add(gltf.scene);
    gltf.scene.rotation.x += 0.005;
    animate1();
}, undefined, function (error) {
    console.error(error);
});

camera1.position.z = 30;

const light1 = new THREE.HemisphereLight(0xffffff, 0x444444);
light1.position.set(1, 1, 1);
scene1.add(light1);

const backlight1 = new THREE.PointLight(0xffffff, 1, 100);
backlight1.position.set(0, 0, -5);
scene1.add(backlight1);

function animate1() {
    requestAnimationFrame(animate1);
    const gltfModel1 = scene1.children.find(child => child.isGroup);
    if (gltfModel1) {
        gltfModel1.rotation.y += 0.003;
    }
    renderer1.render(scene1, camera1);
}

// Second Scene
// const scene2 = new THREE.Scene();
// const camera2 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer2 = new THREE.WebGLRenderer({ alpha: true });
// renderer2.setSize(window.innerWidth * 0.8, window.innerHeight * 0.8);
// document.getElementById('model-container-2').appendChild(renderer2.domElement);

// const loader2 = new GLTFLoader();
// loader2.load('assets/scene.gltf', function (gltf) {
//     scene2.add(gltf.scene);
//     gltf.scene.rotation.x += 0.005;
//     animate2();
// }, undefined, function (error) {
//     console.error(error);
// });

// camera2.position.z = 40;

// const light2 = new THREE.HemisphereLight(0xffffff, 0x444444);
// light2.position.set(1, 1, 1);
// scene2.add(light2);

// function animate2() {
//     requestAnimationFrame(animate2);
//     const gltfModel2 = scene2.children.find(child => child.isGroup);
//     if (gltfModel2) {
//         gltfModel2.rotation.y += 0.002;
//     }
//     renderer2.render(scene2, camera2);
// }

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    camera1.aspect = window.innerWidth / window.innerHeight;
    camera1.updateProjectionMatrix();
    renderer1.setSize(window.innerWidth, window.innerHeight);

    // camera2.aspect = window.innerWidth / window.innerHeight;
    // camera2.updateProjectionMatrix();
    // renderer2.setSize(window.innerWidth * 0.8, window.innerHeight * 0.8);
}

//sketchfab viewer

// Sketchfab Viewer
// var iframe = document.getElementById('api-frame');
// var version = '1.7.0';
// var urlid = '2d9944241223457d9b88c866e38736c3';
// var client = new Sketchfab(version, iframe);

// client.init(urlid, {
//     success: function onSuccess(api) {
//         api.start();
//         api.addEventListener('viewerready', function() {
//             console.log('Viewer is ready');
//             // Set the background to black
//             api.setBackground({ color: [0, 0, 0] });
//         });
//     },
//     error: function onError() {
//         console.log('Viewer error');
//     }
// });

// // Three.js code
// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// var renderer = new THREE.WebGLRenderer({ alpha: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // Set the background color of the scene to transparent
// renderer.setClearColor(0x000000, 0); // Black background with transparency

// // Rendering loop
// function animate() {
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
// }
// animate();

// Sketchfab Viewer Initialization
var iframe = document.getElementById('api-frame');
var version = '1.7.0';
var urlid = '2d9944241223457d9b88c866e38736c3';
var client = new Sketchfab(version, iframe);

client.init(urlid, {
    success: function onSuccess(api) {
        api.start();
        api.addEventListener('viewerready', function() {
            console.log('Viewer is ready');

            api.setBackground({color: [0, 0, 0]}, function() {
                console.log('Background changed to black');
            });
        });
    },
    error: function onError() {
        console.log('Viewer error');
    }
});

document.getElementById('background-color').addEventListener('click', function () {
    var color = [0, 0, 0, 1]; // Black color
    api.setBackground({color: color}, function () {
      console.log('Background updated to black');
    });
  });

  //JOHN SECTION

  const tsData = {
    labels: ["Nov 13", "Dec 13", "Jan 14", "Feb 14", "Mar 14", "Apr 14", "May 14", "Jun 14", "Jul 14", "Aug 14", "Sep 14", "Oct 14", "Nov 14", "Dec 14", "Jan 15", "Feb 15", "Mar 15", "Apr 15", "May 15", "Jun 15", "Jul 15", "Aug 15", "Sep 15", "Oct 15", "Nov 15", "Dec 15", "Jan 16", "Feb 16", "Mar 16", "Apr 16", "May 16", "Jun 16", "Jul 16", "Aug 16", "Sep 16", "Oct 16", "Nov 16", "Dec 16", "Jan 17", "Feb 17", "Mar 17", "Apr 17", "May 17", "Jun 17", "Jul 17", "Aug 17", "Sep 17", "Oct 17", "Nov 17", "Dec 17", "Jan 18", "Feb 18", "Mar 18", "Apr 18", "May 18", "Jun 18", "Jul 18", "Aug 18", "Sep 18", "Oct 18", "Nov 18", "Dec 18", "Jan 19", "Feb 19", "Mar 19", "Apr 19", "May 19", "Jun 19", "Jul 19", "Aug 19", "Sep 19", "Oct 19", "Nov 19", "Dec 19", "Jan 20", "Feb 20", "Mar 20", "Apr 20", "May 20", "Jun 20", "Jul 20", "Aug 20", "Sep 20", "Oct 20", "Nov 20", "Dec 20", "Jan 21", "Feb 21", "Mar 21", "Apr 21", "May 21", "Jun 21", "Jul 21", "Aug 21", "Sep 21", "Oct 21", "Nov 21", "Dec 21", "Jan 22", "Feb 22", "Mar 22", "Apr 22", "May 22", "Jun 22", "Jul 22", "Aug 22", "Sep 22", "Oct 22", "Nov 22", "Dec 22", "Jan 23", "Feb 23", "Mar 23", "Apr 23", "May 23", "Jun 23", "Jul 23", "Aug 23", "Sep 23", "Oct 23"],
    datasets: [
      {
        label: "Studio",
        data: [2350, 2317, 2298, 2298, 2298, 2300, 2317, 2313, 2310, 2285, 2280, 2281, 2281, 2289, 2293, 2301, 2318, 2350, 2382, 2398, 2398, 2417, 2442, 2443, 2427, 2402, 2400, 2428, 2445, 2478, 2483, 2498, 2498, 2496, 2496, 2462, 2413, 2407, 2433, 2483, 2492, 2508, 2517, 2517, 2520, 2537, 2553, 2557, 2498, 2498, 2508, 2573, 2588, 2588, 2573, 2558, 2564, 2564, 2550, 2519, 2509, 2506, 2505, 2491, 2525, 2576, 2657, 2702, 2735, 2745, 2750, 2733, 2715, 2698, 2715, 2733, 2777, 2770, 2737, 2643, 2534, 2417, 2305, 2218, 2150, 2104, 2072, 2073, 2098, 2158, 2225, 2340, 2398, 2497, 2497, 2580, 2548, 2633, 2650, 2787, 2869, 3034, 3097, 3198, 3225, 3283, 3200, 3138, 3078, 3095, 3098, 3150, 3183, 3300, 3317, 3383, 3358, 3399, 3414, 3445],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1
      },
      {
        label: "1 Bedroom",
        data: [2995, 2928, 2847, 2815, 2800, 2840, 2850, 2798, 2758, 2732, 2733, 2715, 2698, 2723, 2757, 2774, 2799, 2817, 2867, 2883, 2898, 2882, 2898, 2875, 2858, 2838, 2881, 2948, 2985, 3000, 3000, 3016, 3016, 3015, 2995, 2960, 2924, 2892, 2894, 2923, 2955, 2987, 2995, 3015, 3043, 3082, 3066, 3031, 2947, 2940, 2946, 2989, 2995, 2997, 3032, 3083, 3122, 3138, 3122, 3083, 3056, 3045, 3044, 2991, 3028, 3104, 3251, 3322, 3380, 3391, 3393, 3370, 3340, 3309, 3315, 3348, 3407, 3398, 3339, 3204, 3063, 2923, 2800, 2693, 2610, 2575, 2565, 2603, 2638, 2709, 2805, 2952, 2960, 3075, 3127, 3330, 3363, 3407, 3498, 3598, 3757, 3828, 3929, 4017, 4121, 4129, 4058, 3958, 3917, 3898, 3922, 4053, 4107, 4234, 4219, 4258, 4187, 4168, 4175, 4195],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1
      },
      {
        label: "2 Bedroom",
        data: [3550, 3517, 3433, 3400, 3367, 3417, 3433, 3367, 3317, 3279, 3296, 3263, 3215, 3225, 3258, 3260, 3267, 3265, 3332, 3363, 3365, 3332, 3315, 3282, 3248, 3200, 3275, 3373, 3457, 3480, 3480, 3495, 3491, 3476, 3476, 3432, 3407, 3373, 3395, 3437, 3472, 3532, 3563, 3593, 3593, 3592, 3616, 3609, 3512, 3490, 3532, 3665, 3698, 3665, 3640, 3608, 3608, 3612, 3596, 3561, 3515, 3497, 3448, 3388, 3423, 3539, 3765, 3897, 4013, 4048, 4148, 4197, 4195, 4095, 4043, 4043, 4143, 4128, 4030, 3832, 3690, 3573, 3457, 3349, 3294, 3260, 3262, 3280, 3297, 3346, 3392, 3525, 3642, 3850, 4067, 4358, 4323, 4272, 4128, 4230, 4330, 4595, 4827, 5064, 5151, 5219, 5283, 5300, 5365, 5397, 5555, 5690, 5792, 5800, 5600, 5432, 5230, 5297, 5347, 5445],
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1
      },
      {
        label: "3 Bedroom",
        data: [4500, 4533, 4400, 4333, 4250, 4383, 4467, 4348, 4248, 4163, 4198, 4125, 3893, 3876, 3882, 3898, 3907, 3808, 3890, 3882, 3948, 3982, 4030, 4028, 3946, 3898, 4094, 4311, 4494, 4532, 4532, 4548, 4517, 4517, 4467, 4367, 4267, 4200, 4242, 4342, 4440, 4521, 4555, 4588, 4631, 4631, 4682, 4648, 4572, 4518, 4618, 4778, 4865, 4830, 4812, 4787, 4773, 4758, 4704, 4620, 4567, 4530, 4460, 4347, 4353, 4490, 4723, 4800, 4850, 4865, 4955, 5005, 5006, 4983, 4983, 4983, 5083, 5017, 4933, 4710, 4510, 4258, 4020, 3835, 3737, 3649, 3600, 3597, 3563, 3630, 3732, 4032, 4265, 4500, 4525, 4719, 4652, 4893, 4853, 5103, 5019, 5232, 5448, 5798, 6133, 6250, 6248, 6032, 5947, 5947, 5995, 6330, 6665, 7300, 7255, 7005, 6455, 6317, 6267, 6102],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1
      },
      {
        label: "4 Bedroom",
        data: [5800, 5928, 5828, 5673, 5508, 5633, 5782, 5617, 5492, 5333, 5333, 5167, 4967, 4967, 5000, 5033, 5033, 4966, 5131, 5281, 5315, 5217, 5133, 5067, 4958, 4891, 5258, 5633, 5967, 6000, 6000, 6000, 6000, 5998, 5932, 5797, 5598, 5498, 5558, 5725, 5850, 5923, 5957, 5998, 6042, 6073, 6073, 5998, 5933, 5877, 5897, 5930, 5985, 5999, 6072, 6124, 6190, 6183, 6166, 6100, 6033, 6000, 5867, 5767, 5767, 5967, 6333, 6486, 6586, 6452, 6467, 6398, 6401, 6314, 6383, 6412, 6531, 6564, 6564, 6448, 6082, 5750, 5446, 5279, 5046, 4833, 4705, 4722, 4684, 4779, 4829, 5133, 5385, 5553, 5969, 6333, 6732, 6382, 6549, 6317, 6417, 6467, 6967, 7433, 7633, 7767, 7858, 7623, 7321, 7097, 6932, 6983, 7150, 7548, 7830, 7995, 7926, 7926, 7759, 7495],
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1
      },
     
    ]

  };
  


  const apartmentData = {
    "Flatbush, New York, NY": {
      "Studio": "$2,450",
      "1 Bed": "$2,650",
      "2 Bed": "$3,095",
      "All": "$2,890"
    },
    "Washington Heights, New York, NY": {
      "Studio": "$2,350",
      "1 Bed": "$2,400",
      "2 Bed": "$2,799",
      "All": "$2,900"
    },
    "West Harlem, New York, NY": {
      "Studio": "$2,495",
      "1 Bed": "$2,650",
      "2 Bed": "$3,109",
      "All": "$3,000"
    },
    "Harlem, New York, NY": {
      "Studio": "$2,500",
      "1 Bed": "$2,650",
      "2 Bed": "$3,200",
      "All": "$3,061"
    },
    "Crown Heights, New York, NY": {
      "Studio": "$2,575",
      "1 Bed": "$2,850",
      "2 Bed": "$3,099",
      "All": "$3,100"
    },
    "Bedford-Stuyvesant, New York, NY": {
      "Studio": "$2,450",
      "1 Bed": "$2,750",
      "2 Bed": "$3,000",
      "All": "$3,191"
    },
    "East Harlem, New York, NY": {
      "Studio": "$2,795",
      "1 Bed": "$2,995",
      "2 Bed": "$3,695",
      "All": "$3,295"
    },
    "Bushwick, New York, NY": {
      "Studio": "$2,595",
      "1 Bed": "$2,850",
      "2 Bed": "$3,000",
      "All": "$3,299"
    },
    "Upper East Side, New York, NY": {
      "Studio": "$2,595",
      "1 Bed": "$3,400",
      "2 Bed": "$5,498",
      "All": "$3,700"
    },
    "Murray Hill, New York, NY": {
      "Studio": "$3,350",
      "1 Bed": "$4,000",
      "2 Bed": "$6,203",
      "All": "$3,950"
    },
    "Downtown Brooklyn, New York, NY": {
      "Studio": "$3,529",
      "1 Bed": "$4,050",
      "2 Bed": "$5,860",
      "All": "$4,195"
    },
    "Financial District, New York, NY": {
      "Studio": "$3,515",
      "1 Bed": "$4,400",
      "2 Bed": "$6,320",
      "All": "$4,200"
    },
    "Long Island City, New York, NY": {
      "Studio": "$3,395",
      "1 Bed": "$4,095",
      "2 Bed": "$5,670",
      "All": "$4,215"
    },
    "Prospect Heights, New York, NY": {
      "Studio": "$3,317",
      "1 Bed": "$4,223",
      "2 Bed": "$6,091",
      "All": "$4,245"
    },
    "Hudson Yards, New York, NY": {
      "Studio": "$3,755",
      "1 Bed": "$4,225",
      "2 Bed": "$6,875",
      "All": "$4,300"
    },
    "Midtown, New York, NY": {
      "Studio": "$3,138",
      "1 Bed": "$4,085",
      "2 Bed": "$6,795",
      "All": "$4,359"
    },
    "Hell's Kitchen, New York, NY": {
      "Studio": "$3,500",
      "1 Bed": "$4,033",
      "2 Bed": "$5,850",
      "All": "$4,470"
    },
    "Kips Bay, New York, NY": {
      "Studio": "$3,768",
      "1 Bed": "$3,900",
      "2 Bed": "$5,340",
      "All": "$4,495"
    },
    "East Village, New York, NY": {
      "Studio": "$3,325",
      "1 Bed": "$3,595",
      "2 Bed": "$4,500",
      "All": "$4,495"
    },
    "Midtown East, New York, NY": {
      "Studio": "$3,150",
      "1 Bed": "$4,274",
      "2 Bed": "$5,931",
      "All": "$4,538"
    },
    "West Village, New York, NY": {
      "Studio": "$3,875",
      "1 Bed": "$4,695",
      "2 Bed": "$5,695",
      "All": "$4,550"
    },
    "Chelsea, New York, NY": {
      "Studio": "$3,600",
      "1 Bed": "$5,000",
      "2 Bed": "$7,478",
      "All": "$4,675"
    },
    "Upper West Side, New York, NY": {
      "Studio": "$3,486",
      "1 Bed": "$4,360",
      "2 Bed": "$6,157",
      "All": "$4,700"
    },
    "Lower East Side, New York, NY": {
      "Studio": "$3,790",
      "1 Bed": "$3,495",
      "2 Bed": "$4,601",
      "All": "$4,711"
    },
    "Williamsburg, New York, NY": {
      "Studio": "$3,925",
      "1 Bed": "$4,350",
      "2 Bed": "$4,654",
      "All": "$4,725"
    },
    "Midtown South, New York, NY": {
      "Studio": "$4,076",
      "1 Bed": "$5,000",
      "2 Bed": "$7,077",
      "All": "$5,000"
    },
    "Greenwich Village, New York, NY": {
      "Studio": "$4,200",
      "1 Bed": "$5,200",
      "2 Bed": "$6,869",
      "All": "$5,100"
    },
    "Gramercy Park, New York, NY": {
      "Studio": "$3,913",
      "1 Bed": "$5,175",
      "2 Bed": "$5,611",
      "All": "$5,700"
    },
    "NoMad, New York, NY": {
      "Studio": "$4,289",
      "1 Bed": "$5,606",
      "2 Bed": "$7,949",
      "All": "$5,724"
    },
    "Tribeca, New York, NY": {
      "Studio": "$3,999",
      "1 Bed": "$5,600",
      "2 Bed": "$7,797",
      "All": "$7,058"
    }
  };
  

const apartmentColors = {
    "Studio": {
      backgroundColor: "rgba(173, 216, 230, 0.2)", // Light Blue
      borderColor: "rgba(173, 216, 230, 1)"
    },
    "1 Bedroom": {
      backgroundColor: "rgba(152, 251, 152, 0.2)", // Soft Green
      borderColor: "rgba(152, 251, 152, 1)"
    },
    "2 Bedroom": {
      backgroundColor: "rgba(216, 191, 216, 0.2)", // Light Purple
      borderColor: "rgba(216, 191, 216, 1)"
    },
    "3 Bedroom": {
      backgroundColor: "rgba(255, 192, 203, 0.2)", // Pink
      borderColor: "rgba(255, 192, 203, 1)"
    },
    "4 Bedroom": {
      backgroundColor: "rgba(255, 165, 0, 0.2)", // Orange
      borderColor: "rgba(255, 165, 0, 1)"
    },
  };
  
   

  let apartmentChart;

  function createApartmentChart(apartmentType) {
      const ctx = document.getElementById("myChart").getContext("2d");
      console.log(ctx)
      const selectedDataset = tsData.datasets.find(dataset => dataset.label === apartmentType);
      
      // Here we map the general structure to the selected dataset structure
      const data = {
          labels: tsData.labels,
          datasets: [{
              label: selectedDataset.label,
              data: selectedDataset.data,
              backgroundColor: apartmentColors[apartmentType].backgroundColor,
              borderColor: apartmentColors[apartmentType].borderColor,
              borderWidth: 1,
              fill: false,
          }]
      };
      
      const options = {
        scales: {
          y: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)', // Light grey gridlines
              borderColor: 'rgba(255, 255, 255, 0.25)', // Border color
              drawBorder: true,
              drawOnChartArea: true
            },
            ticks: {
              beginAtZero: true,
              color: 'white' // White text for ticks
            }
          },
          x: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)', // Light grey gridlines
              borderColor: 'rgba(255, 255, 255, 0.25)', // Border color
              drawBorder: true,
              drawOnChartArea: true
            },
            ticks: {
              color: 'white' 
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: 'white' 
            }
          }
        }
      };
      
      if (apartmentChart) {
          apartmentChart.destroy();
      }
  
      apartmentChart = new Chart(ctx, {
          type: "line",
          data: data,
          options: options,
      });
  }
  
  // Event listener for dropdown changes
  document.getElementById("apartmentType").addEventListener("change", function() {
      createApartmentChart(this.value);
  });
  
  // Initialize the chart with the default view
  createApartmentChart("Studio");


// Function to initialize the selection options
function initializeNeighborhoodOptions() {
  const selectElement = document.getElementById('neighborhoodSelect');
  for (let neighborhood in apartmentData) {
    let option = new Option(neighborhood, neighborhood);
    console.log(selectElement);
    //selectElement.add(option);
  }
}

// Function called when the button is clicked to update the chart
function updateNeighbor() {
  const selectedOptions = [...document.getElementById('neighborhoodSelect').selectedOptions];
  const selectedNeighborhoods = selectedOptions.map(option => option.value);
  updateNeighborhoodComparisonChart(selectedNeighborhoods);
}

// Initialize the selection options when the page loads
window.onload = initializeNeighborhoodOptions;



const apartmentTypeColors = {
  "Studio": "rgba(255, 99, 132, 0.2)",
  "1 Bed": "rgba(54, 162, 235, 0.2)",
  "2 Bed": "rgba(255, 206, 86, 0.2)",
  "All": "rgba(75, 192, 192, 0.2)"
};

let comparisonChart;

// document.getElementById("neighborhoodForm").addEventListener("submit", function(event) {
//   event.preventDefault();
//   const selectedNeighborhoods = Array.from(document.querySelectorAll('input[name="neighborhood"]:checked')).map(el => el.value);
//   updateChart(selectedNeighborhoods);
// });


function parsePrice(priceString) {
  return parseFloat(priceString.replace(/[$,]/g, ''));
}

function updateChart(selectedNeighborhoods) {

  console.log("Selected neighborhoods:", selectedNeighborhoods);

  // Ensure the canvas element is correctly targeted
  const ctx = document.getElementById("comparisonChart").getContext("2d");
  if (!ctx) {
    console.error('The canvas context is not found. Make sure the canvas element exists and the id is correct.');
    return;
  }

  // Ensure that apartmentData is available and has the correct structure
  if (!apartmentData || typeof apartmentData !== 'object') {
    console.error('apartmentData is not available or not an object:', apartmentData);
    return;
  }

  // Building the chart data with some additional checks
  const chartData = {
    labels: ["Studio", "1 Bed", "2 Bed", "All"],
    datasets: selectedNeighborhoods.map((neighborhood, index) => {
      // Check if the neighborhood data exists
      const neighborhoodData = apartmentData[neighborhood];
      if (!neighborhoodData) {
        console.error(`Data for ${neighborhood} is not available.`);
        return {
          label: neighborhood,
          data: [],
          backgroundColor: [],
          borderColor: [],
          borderWidth: 1
        };
      }

      // Convert price strings to numbers
      const data = Object.values(neighborhoodData).map(parsePrice);
      return {
        label: neighborhood,
        data: data,
        backgroundColor: Object.values(apartmentTypeColors)[index % Object.values(apartmentTypeColors).length],
        borderColor: Object.values(apartmentTypeColors).map(color => color.replace("0.2", "1"))[index % Object.values(apartmentTypeColors).length],
        borderWidth: 1
      };
    }).filter(dataset => dataset.data.length > 0) // Filter out any datasets that did not have data
  };



  // Destroy the previous chart if it exists
  if (comparisonChart) {
    comparisonChart.destroy();
  }

  // Create a new chart instance
  comparisonChart = new Chart(ctx, {
    type: "bar",
    data: chartData,
    options: {
      scales: {
        x: {  // X-axis options 
          grid: {
            borderColor: 'rgba(255, 255, 255, 0.25)', // Border color
            drawBorder: true,
            drawOnChartArea: true
          },
          ticks: {
            color: 'white' // Set X-axis labels to white
          }
        },
        y: {
          grid: {
            borderColor: 'rgba(255, 255, 255, 0.25)', // Border color
            drawBorder: true,
            drawOnChartArea: true
          },
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return '$' + value.toLocaleString();
            },
            color: 'white' // Set Y-axis labels to white
          }
        }
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            color: 'white' // Set legend text to white
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              let label = context.dataset.label || '';
              if (label) {
                label += ': ';
              }
              label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
              return label;
            }
          }
        }
      }
    }
  });
}


document.getElementById("neighborhoodForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const selectedNeighborhoods = Array.from(document.querySelectorAll('input[name="neighborhood"]:checked')).map(el => el.value);
  updateChart(selectedNeighborhoods);
  console.log(selectedNeighborhoods); 
});


initializeNeighborhoodOptions();


let costOfLivingChart;

document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('costOfLivingChart').getContext('2d');
  costOfLivingChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Overall', 'Housing', 'Utilities', 'Groceries', 'Transportation'],
      datasets: [{
        label: 'Cost of Living Increase (%)',
        data: [228, 485, 103, 135, 116], // Percentages relative to the national average
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      indexAxis: 'y',
      scales: {
        x: {
          grid: {
            borderColor: 'rgba(255, 255, 255, 0.25)', // Border color
            drawBorder: true,
            drawOnChartArea: true
          },
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return value + '%';
            },
            color: 'white' // Set X-axis labels to white
          }
        },
        y: {
          grid: {
            borderColor: 'rgba(255, 255, 255, 0.25)', // Border color
            drawBorder: true,
            drawOnChartArea: true
          },
          ticks: {
            color: 'white' // Set Y-axis labels to white
          }
        }
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            color: 'white' // Set legend text to white
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              let value = context.raw - 100; // Calculate the difference from 100%
              let sign = value > 0 ? '+' : ''; // Add a plus sign if the value is positive
              return `${context.dataset.label}: ${sign}${value}%`;
            }
          }
        },
        annotation: {
          annotations: {
            line1: {
              type: 'line',
              xMin: 100,
              xMax: 100,
              borderColor: 'white',
              borderWidth: 2,
              label: {
                content: 'National Average',
                enabled: true,
                position: 'end',
                yAdjust: -6
              }
            }
          }
        }
      }
    }
  });
});


let salaryHistogramChart;

document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('salaryHistogramChart').getContext('2d');
  salaryHistogramChart = createChart(ctx, "Yearly"); // Initialize with Yearly data
});

function createChart(ctx, salaryType) {
  const data = {
    "Yearly": {
      labels: ["$49K-$55K", "$55K-$61K", "$61K-$67K", "$67K-$73K", "$73K-$79K", "$78K-$84K", "$84K-$90K", "$90K-$96K", "$96K-$102K", "$102K-$108K", "$108K-$114K"],
      percentages: [7, 11, 9, 10, 10, 11, 8, 10, 7, 8, 3]
    },
    "Monthly": {
      labels: ["$4.1K-$4.6K", "$4.6K-$5.1K", "$5.1K-$5.6K", "$5.6K-$6.1K", "$6.1K-$6.5K", "$6.5K-$7.0K", "$7.0K-$7.5K", "$7.5K-$8.0K", "$8.0K-$8.5K", "$8.5K-$9.0K", "$9.0K-$9.5K"],
      percentages: [7, 11, 9, 10, 10, 11, 8, 10, 7, 8, 3]
    },
    "Weekly": {
      labels: ["$946-$1,059", "$1,059-$1,172", "$1,172-$1,284", "$1,284-$1,397", "$1,397-$1,510", "$1,510-$1,623", "$1,623-$1,736", "$1,736-$1,849", "$1,849-$1,962", "$1,962-$2,075", "$2,075-$2,187"],
      percentages: [7, 11, 9, 10, 10, 11, 8, 10, 7, 8, 3]
    },
    "Hourly": {
      labels: ["$23.65-$26.47", "$26.47-$29.29", "$29.29-$32.11", "$32.11-$34.93", "$34.93-$37.75", "$37.75-$40.58", "$40.58-$43.40", "$43.40-$46.22", "$46.22-$49.04", "$49.04-$51.86", "$51.86-$54.68"],
      percentages: [7, 11, 9, 10, 10, 11, 8, 10, 7, 8, 3]
    }
  };

  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data[salaryType].labels,
      datasets: [{
        label: 'Percentage of Jobs',
        data: data[salaryType].percentages,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: 'white' 
          }
        },
        x: {
          ticks: {
            color: 'white' 
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `${context.dataset.label}: ${context.raw}% of jobs`;
            }
          }
        }
      }
    }
  });
}

function updateSalary() {
  const selectedSalaryType = document.getElementById('salaryType').value;
  salaryHistogramChart.destroy(); // Destroy the old chart
  const ctx = document.getElementById('salaryHistogramChart').getContext('2d');
  salaryHistogramChart = createChart(ctx, selectedSalaryType); // Create a new chart with the selected type
}




const costOfLivingByCity = {
  "Dallas_TX_vs_NewYork_NY": {
      "SalaryNeededInNewYork": 330291,
      "CostOfLivingIncrease": 120.19,
      "GroceryCost": {
        "Steak": {"Dallas": 13.35, "NewYork": 14.16, "Change": 6},
        "GroundBeef": {"Dallas": 5.05, "NewYork": 5.86, "Change": 16},
        "Sausage": {"Dallas": 4.98, "NewYork": 5.46, "Change": 10},
        "FryingChicken": {"Dallas": 1.65, "NewYork": 1.58, "Change": -4},
        "ChunkLightTuna": {"Dallas": 1.21, "NewYork": 1.58, "Change": 31},
        "WholeMilk": {"Dallas": 4.09, "NewYork": 4.35, "Change": 6},
        "Eggs": {"Dallas": 3.69, "NewYork": 4.05, "Change": 10},
        "Margarine": {"Dallas": 1.49, "NewYork": 1.84, "Change": 23},
        "ParmesanCheese": {"Dallas": 4.45, "NewYork": 5.44, "Change": 22},
        "Potatoes": {"Dallas": 4.55, "NewYork": 5.11, "Change": 12},
        "Bananas": {"Dallas": 0.66, "NewYork": 0.95, "Change": 44},
        "Lettuce": {"Dallas": 1.75, "NewYork": 2.30, "Change": 31},
        "Bread": {"Dallas": 4.15, "NewYork": 4.11, "Change": -1},
        "FreshOrangeJuice": {"Dallas": 4.22, "NewYork": 4.75, "Change": 13},
        "Coffee": {"Dallas": 5.51, "NewYork": 6.66, "Change": 21},
        "Sugar": {"Dallas": 3.64, "NewYork": 4.35, "Change": 20},
        "CornFlakes": {"Dallas": 5.21, "NewYork": 5.73, "Change": 10},
        "SweetPeas": {"Dallas": 1.50, "NewYork": 1.95, "Change": 30},
        "Peaches": {"Dallas": 2.51, "NewYork": 2.65, "Change": 6},
        "FacialTissues": {"Dallas": 2.15, "NewYork": 2.93, "Change": 36},
        "Detergent": {"Dallas": 20.41, "NewYork": 21.89, "Change": 7},
        "CookingOil": {"Dallas": 6.78, "NewYork": 8.87, "Change": 31},
        "FrozenMeal": {"Dallas": 3.66, "NewYork": 4.27, "Change": 17},
        "FrozenCorn": {"Dallas": 1.68, "NewYork": 2.29, "Change": 36},
        "PotatoChips": {"Dallas": 3.85, "NewYork": 4.39, "Change": 14},
        "SoftDrink": {"Dallas": 2.61, "NewYork": 2.87, "Change": 10}
      },
      "HousingCost": {
        "ApartmentRent": {"Dallas": 1586.00, "NewYork": 5044.00, "Change": 218},
        "HomePrice": {"Dallas": 466372.00, "NewYork": 2645549.00, "Change": 467}
      },
      "UtilitiesCost": {
        "TotalEnergy": {"Dallas": 220.76, "NewYork": 192.64, "Change": -13},
        "Phone": {"Dallas": 210.30, "NewYork": 198.52, "Change": -6}
      },
      "TransportationCost": {
        "TireBalance": {"Dallas": 51.03, "NewYork": 74.79, "Change": 47},
        "Gasoline": {"Dallas": 3.21, "NewYork": 3.96, "Change": 23}
      },
      "HealthcareCost": {
        "OptometristVisit": {"Dallas": 144.87, "NewYork": 130.84, "Change": -10},
        "DoctorVisit": {"Dallas": 143.02, "NewYork": 154.67, "Change": 8},
        "DentistVisit": {"Dallas": 131.32, "NewYork": 159.21, "Change": 21},
        "Ibuprofen": {"Dallas": 10.58, "NewYork": 11.04, "Change": 4},
        "PrescriptionDrug": {"Dallas": 500.84, "NewYork": 418.79, "Change": -16}
      },
      "MiscellaneousCost": {
        "Hamburger": {"Dallas": 4.96, "NewYork": 6.60, "Change": 33},
        "Pizza": {"Dallas": 11.21, "NewYork": 13.08, "Change": 17},
        "FriedChicken": {"Dallas": 4.79, "NewYork": 5.67, "Change": 18},
        "Haircut": {"Dallas": 32.92, "NewYork": 31.24, "Change": 5},
        "BeautySalon": {"Dallas": 66.30, "NewYork": 75.00, "Change": 13},
        "Toothpaste": {"Dallas": 3.35, "NewYork": 4.01, "Change": 20},
        "Shampoo": {"Dallas": 1.24, "NewYork": 1.86, "Change": 50},
        "DryCleaning": {"Dallas": 16.23, "NewYork": 17.63, "Change": 9},
        "ManDressShirt": {"Dallas": 49.81, "NewYork": 44.15, "Change": 11},
        "BoyJeans": {"Dallas": 31.93, "NewYork": 30.54, "Change": 4},
        "WomenSlacks": {"Dallas": 41.79, "NewYork": 38.01, "Change": 9},
        "WasherRepair": {"Dallas": 96.14, "NewYork": 119.84, "Change": 25},
        "Newspaper": {"Dallas": 15.29, "NewYork": 12.82, "Change": -16},
        "Movie": {"Dallas": 14.50, "NewYork": 19.26, "Change": 33},
        "Yoga": {"Dallas": 23.88, "NewYork": 30.39, "Change": 27},
        "TennisBalls": {"Dallas": 3.43, "NewYork": 4.09, "Change": 19},
        "VeterinaryServices": {"Dallas": 80.27, "NewYork": 113.01, "Change": 41},
        "Beer": {"Dallas": 10.90, "NewYork": 12.28, "Change": 13},
        "Wine": {"Dallas": 12.20, "NewYork": 12.27, "Change": 1}
      }
    },
  "LosAngeles_CA_vs_NewYork_NY": {
      "SalaryNeededInNewYork": 227863,
      "CostOfLivingIncrease": 51.91,
      "GroceryCost": {
        "Steak": {"LosAngelesLongBeachCA": 13.86, "NewYorkManhattanNY": 14.16, "Change": 2},
        "GroundBeef": {"LosAngelesLongBeachCA": 5.79, "NewYorkManhattanNY": 5.86, "Change": 1},
        "Sausage": {"LosAngelesLongBeachCA": 5.47, "NewYorkManhattanNY": 5.46, "Change": 0},
        "FryingChicken": {"LosAngelesLongBeachCA": 2.37, "NewYorkManhattanNY": 1.58, "Change": 33},
        "ChunkLightTuna": {"LosAngelesLongBeachCA": 1.43, "NewYorkManhattanNY": 1.58, "Change": 10},
        "WholeMilk": {"LosAngelesLongBeachCA": 4.44, "NewYorkManhattanNY": 4.35, "Change": -2},
        "Eggs": {"LosAngelesLongBeachCA": 4.76, "NewYorkManhattanNY": 4.05, "Change": -15},
        "Margarine": {"LosAngelesLongBeachCA": 1.72, "NewYorkManhattanNY": 1.84, "Change": 7},
        "ParmesanCheese": {"LosAngelesLongBeachCA": 4.77, "NewYorkManhattanNY": 5.44, "Change": 14},
        "Potatoes": {"LosAngelesLongBeachCA": 4.47, "NewYorkManhattanNY": 5.11, "Change": 14},
        "Bananas": {"LosAngelesLongBeachCA": 0.84, "NewYorkManhattanNY": 0.95, "Change": 13},
        "Lettuce": {"LosAngelesLongBeachCA": 1.89, "NewYorkManhattanNY": 2.30, "Change": 22},
        "Bread": {"LosAngelesLongBeachCA": 4.22, "NewYorkManhattanNY": 4.11, "Change": -3},
        "FreshOrangeJuice": {"LosAngelesLongBeachCA": 4.60, "NewYorkManhattanNY": 4.75, "Change": 3},
        "Coffee": {"LosAngelesLongBeachCA": 6.76, "NewYorkManhattanNY": 6.66, "Change": -1},
        "Sugar": {"LosAngelesLongBeachCA": 4.18, "NewYorkManhattanNY": 4.35, "Change": 4},
        "CornFlakes": {"LosAngelesLongBeachCA": 5.73, "NewYorkManhattanNY": 5.73, "Change": 0},
        "SweetPeas": {"LosAngelesLongBeachCA": 1.83, "NewYorkManhattanNY": 1.95, "Change": 7},
        "Peaches": {"LosAngelesLongBeachCA": 2.56, "NewYorkManhattanNY": 2.65, "Change": 4},
        "FacialTissues": {"LosAngelesLongBeachCA": 2.56, "NewYorkManhattanNY": 2.93, "Change": 14},
        "Detergent": {"LosAngelesLongBeachCA": 20.89, "NewYorkManhattanNY": 21.89, "Change": 5},
        "CookingOil": {"LosAngelesLongBeachCA": 8.23, "NewYorkManhattanNY": 8.87, "Change": 8},
        "FrozenMeal": {"LosAngelesLongBeachCA": 3.94, "NewYorkManhattanNY": 4.27, "Change": 8},
        "FrozenCorn": {"LosAngelesLongBeachCA": 1.82, "NewYorkManhattanNY": 2.29, "Change": 26},
        "PotatoChips": {"LosAngelesLongBeachCA": 4.03, "NewYorkManhattanNY": 4.39, "Change": 9},
        "SoftDrink": {"LosAngelesLongBeachCA": 2.76, "NewYorkManhattanNY": 2.87, "Change": 4}
      },
      "HousingCost": {
        "ApartmentRent": {"LosAngelesLongBeachCA": 3201.00, "NewYorkManhattanNY": 5044.00, "Change": 58},
        "HomePrice": {"LosAngelesLongBeachCA": 1183854.00, "NewYorkManhattanNY": 2645549.00, "Change": 123}
      },
      "UtilitiesCost": {
        "TotalEnergy": {"LosAngelesLongBeachCA": 226.97, "NewYorkManhattanNY": 192.64, "Change": -15},
        "Phone": {"LosAngelesLongBeachCA": 195.20, "NewYorkManhattanNY": 198.52, "Change": 2}
      },
      "TransportationCost": {
        "TireBalance": {"LosAngelesLongBeachCA": 61.00, "NewYorkManhattanNY": 74.79, "Change": 23},
        "Gasoline": {"LosAngelesLongBeachCA": 4.97, "NewYorkManhattanNY": 3.96, "Change": -20}
      },
      "HealthcareCost": {
        "OptometristVisit": {"LosAngelesLongBeachCA": 140.05, "NewYorkManhattanNY": 130.84, "Change": -7},
        "DoctorVisit": {"LosAngelesLongBeachCA": 131.00, "NewYorkManhattanNY": 154.67, "Change": 18},
        "DentistVisit": {"LosAngelesLongBeachCA": 131.18, "NewYorkManhattanNY": 159.21, "Change": 21},
        "Ibuprofen": {"LosAngelesLongBeachCA": 11.79, "NewYorkManhattanNY": 11.04, "Change": -6},
        "PrescriptionDrug": {"LosAngelesLongBeachCA": 506.81, "NewYorkManhattanNY": 418.79, "Change": -17}
      },
      "MiscellaneousCost": {
        "Hamburger": {"LosAngelesLongBeachCA": 6.12, "NewYorkManhattanNY": 6.60, "Change": 8},
        "Pizza": {"LosAngelesLongBeachCA": 13.49, "NewYorkManhattanNY": 13.08, "Change": -3},
        "FriedChicken": {"LosAngelesLongBeachCA": 5.56, "NewYorkManhattanNY": 5.67, "Change": 2},
        "Haircut": {"LosAngelesLongBeachCA": 26.06, "NewYorkManhattanNY": 31.24, "Change": 20},
        "BeautySalon": {"LosAngelesLongBeachCA": 87.75, "NewYorkManhattanNY": 75.00, "Change": -15},
        "Toothpaste": {"LosAngelesLongBeachCA": 3.68, "NewYorkManhattanNY": 4.01, "Change": 9},
        "Shampoo": {"LosAngelesLongBeachCA": 1.41, "NewYorkManhattanNY": 1.86, "Change": 32},
        "DryCleaning": {"LosAngelesLongBeachCA": 23.12, "NewYorkManhattanNY": 17.63, "Change": -24},
        "ManDressShirt": {"LosAngelesLongBeachCA": 36.18, "NewYorkManhattanNY": 44.15, "Change": 22},
        "BoyJeans": {"LosAngelesLongBeachCA": 30.19, "NewYorkManhattanNY": 30.54, "Change": 1},
        "WomenSlacks": {"LosAngelesLongBeachCA": 38.74, "NewYorkManhattanNY": 38.01, "Change": -2},
        "WasherRepair": {"LosAngelesLongBeachCA": 89.90, "NewYorkManhattanNY": 119.84, "Change": 33},
        "Newspaper": {"LosAngelesLongBeachCA": 9.85, "NewYorkManhattanNY": 12.82, "Change": 30},
        "Movie": {"LosAngelesLongBeachCA": 17.83, "NewYorkManhattanNY": 19.26, "Change": 8},
        "Yoga": {"LosAngelesLongBeachCA": 22.50, "NewYorkManhattanNY": 30.39, "Change": 35},
        "TennisBalls": {"LosAngelesLongBeachCA": 3.30, "NewYorkManhattanNY": 4.09, "Change": 24},
        "VeterinaryServices": {"LosAngelesLongBeachCA": 93.29, "NewYorkManhattanNY": 113.01, "Change": 21},
        "Beer": {"LosAngelesLongBeachCA": 10.84, "NewYorkManhattanNY": 12.28, "Change": 13},
        "Wine": {"LosAngelesLongBeachCA": 10.39, "NewYorkManhattanNY": 12.27, "Change": 18}
      }
    },



    "Miami_FL_vs_NewYork_NY": {
      "SalaryNeededInNewYork": 286364,
      "CostOfLivingIncrease": 90.91,
      "GroceryCost": {
        "Steak": {"MiamiDadeCountyFL": 13.11, "NewYorkManhattanNY": 14.16, "Change": 8},
        "GroundBeef": {"MiamiDadeCountyFL": 5.82, "NewYorkManhattanNY": 5.86, "Change": 1},
        "Sausage": {"MiamiDadeCountyFL": 5.20, "NewYorkManhattanNY": 5.46, "Change": 5},
        "FryingChicken": {"MiamiDadeCountyFL": 1.46, "NewYorkManhattanNY": 1.58, "Change": 8},
        "ChunkLightTuna": {"MiamiDadeCountyFL": 1.38, "NewYorkManhattanNY": 1.58, "Change": 14},
        "WholeMilk": {"MiamiDadeCountyFL": 4.41, "NewYorkManhattanNY": 4.35, "Change": 1},
        "Eggs": {"MiamiDadeCountyFL": 3.74, "NewYorkManhattanNY": 4.05, "Change": 8},
        "Margarine": {"MiamiDadeCountyFL": 1.87, "NewYorkManhattanNY": 1.84, "Change": 2},
        "ParmesanCheese": {"MiamiDadeCountyFL": 4.94, "NewYorkManhattanNY": 5.44, "Change": 10},
        "Potatoes": {"MiamiDadeCountyFL": 5.31, "NewYorkManhattanNY": 5.11, "Change": 4},
        "Bananas": {"MiamiDadeCountyFL": 0.59, "NewYorkManhattanNY": 0.95, "Change": 61},
        "Lettuce": {"MiamiDadeCountyFL": 1.98, "NewYorkManhattanNY": 2.30, "Change": 16},
        "Bread": {"MiamiDadeCountyFL": 4.92, "NewYorkManhattanNY": 4.11, "Change": 16},
        "FreshOrangeJuice": {"MiamiDadeCountyFL": 4.76, "NewYorkManhattanNY": 4.75, "Change": 0},
        "Coffee": {"MiamiDadeCountyFL": 5.95, "NewYorkManhattanNY": 6.66, "Change": 12},
        "Sugar": {"MiamiDadeCountyFL": 4.31, "NewYorkManhattanNY": 4.35, "Change": 1},
        "CornFlakes": {"MiamiDadeCountyFL": 5.53, "NewYorkManhattanNY": 5.73, "Change": 4},
        "SweetPeas": {"MiamiDadeCountyFL": 1.96, "NewYorkManhattanNY": 1.95, "Change": 1},
        "Peaches": {"MiamiDadeCountyFL": 2.55, "NewYorkManhattanNY": 2.65, "Change": 4},
        "FacialTissues": {"MiamiDadeCountyFL": 2.40, "NewYorkManhattanNY": 2.93, "Change": 22},
        "Detergent": {"MiamiDadeCountyFL": 20.70, "NewYorkManhattanNY": 21.89, "Change": 6},
        "CookingOil": {"MiamiDadeCountyFL": 7.29, "NewYorkManhattanNY": 8.87, "Change": 22},
        "FrozenMeal": {"MiamiDadeCountyFL": 4.02, "NewYorkManhattanNY": 4.27, "Change": 6},
        "FrozenCorn": {"MiamiDadeCountyFL": 2.23, "NewYorkManhattanNY": 2.29, "Change": 3},
        "PotatoChips": {"MiamiDadeCountyFL": 4.03, "NewYorkManhattanNY": 4.39, "Change": 9},
        "SoftDrink": {"MiamiDadeCountyFL": 2.90, "NewYorkManhattanNY": 2.87, "Change": 1}
      },
      "HousingCost": {
        "ApartmentRent": {"MiamiDadeCountyFL": 2927.00, "NewYorkManhattanNY": 5044.00, "Change": 72},
        "HomePrice": {"MiamiDadeCountyFL": 644118.00, "NewYorkManhattanNY": 2645549.00, "Change": 311}
      },
      "UtilitiesCost": {
        "TotalEnergy": {"MiamiDadeCountyFL": 200.41, "NewYorkManhattanNY": 192.64, "Change": 4},
        "Phone": {"MiamiDadeCountyFL": 194.95, "NewYorkManhattanNY": 198.52, "Change": 2}
      },
      "TransportationCost": {
        "TireBalance": {"MiamiDadeCountyFL": 65.58, "NewYorkManhattanNY": 74.79, "Change": 14},
        "Gasoline": {"MiamiDadeCountyFL": 3.69, "NewYorkManhattanNY": 3.96, "Change": 7}
      },
      "HealthcareCost": {
        "OptometristVisit": {"MiamiDadeCountyFL": 97.87, "NewYorkManhattanNY": 130.84, "Change": 34},
        "DoctorVisit": {"MiamiDadeCountyFL": 123.56, "NewYorkManhattanNY": 154.67, "Change": 25},
        "DentistVisit": {"MiamiDadeCountyFL": 105.18, "NewYorkManhattanNY": 159.21, "Change": 51},
        "Ibuprofen": {"MiamiDadeCountyFL": 11.57, "NewYorkManhattanNY": 11.04, "Change": 5},
        "PrescriptionDrug": {"MiamiDadeCountyFL": 490.59, "NewYorkManhattanNY": 418.79, "Change": 15}
      },
      "MiscellaneousCost": {
        "Hamburger": {"MiamiDadeCountyFL": 5.46, "NewYorkManhattanNY": 6.60, "Change": 21},
        "Pizza": {"MiamiDadeCountyFL": 13.97, "NewYorkManhattanNY": 13.08, "Change": 6},
        "FriedChicken": {"MiamiDadeCountyFL": 4.96, "NewYorkManhattanNY": 5.67, "Change": 14},
        "Haircut": {"MiamiDadeCountyFL": 20.99, "NewYorkManhattanNY": 31.24, "Change": 49},
        "BeautySalon": {"MiamiDadeCountyFL": 86.36, "NewYorkManhattanNY": 75.00, "Change": 13},
        "Toothpaste": {"MiamiDadeCountyFL": 3.26, "NewYorkManhattanNY": 4.01, "Change": 23},
        "Shampoo": {"MiamiDadeCountyFL": 1.49, "NewYorkManhattanNY": 1.86, "Change": 25},
        "DryCleaning": {"MiamiDadeCountyFL": 19.06, "NewYorkManhattanNY": 17.63, "Change": 8},
        "ManDressShirt": {"MiamiDadeCountyFL": 27.89, "NewYorkManhattanNY": 44.15, "Change": 58},
        "BoyJeans": {"MiamiDadeCountyFL": 26.09, "NewYorkManhattanNY": 30.54, "Change": 17},
        "WomenSlacks": {"MiamiDadeCountyFL": 30.24, "NewYorkManhattanNY": 38.01, "Change": 26},
        "WasherRepair": {"MiamiDadeCountyFL": 83.91, "NewYorkManhattanNY": 119.84, "Change": 43},
        "Newspaper": {"MiamiDadeCountyFL": 12.33, "NewYorkManhattanNY": 12.82, "Change": 4},
        "Movie": {"MiamiDadeCountyFL": 14.40, "NewYorkManhattanNY": 19.26, "Change": 34},
        "Yoga": {"MiamiDadeCountyFL": 24.20, "NewYorkManhattanNY": 30.39, "Change": 26},
        "TennisBalls": {"MiamiDadeCountyFL": 3.96, "NewYorkManhattanNY": 4.09, "Change": 3},
        "VeterinaryServices": {"MiamiDadeCountyFL": 63.59, "NewYorkManhattanNY": 113.01, "Change": 78},
        "Beer": {"MiamiDadeCountyFL": 11.70, "NewYorkManhattanNY": 12.28, "Change": 5},
        "Wine": {"MiamiDadeCountyFL": 10.93, "NewYorkManhattanNY": 12.27, "Change": 12}
      },
    },
    // sacsasa
    "SanFran_CA_vs_NewYork_NY": {
      "SalaryNeededInNewYork": 197676,
      "CostOfLivingIncrease": 31.78,
      "GroceryCost": {
        "Steak": {"SanFranciscoCA": 15.94, "NewYorkManhattanNY": 14.16, "Change": 11},
        "GroundBeef": {"SanFranciscoCA": 6.30, "NewYorkManhattanNY": 5.86, "Change": 7},
        "Sausage": {"SanFranciscoCA": 5.68, "NewYorkManhattanNY": 5.46, "Change": 4},
        "FryingChicken": {"SanFranciscoCA": 2.08, "NewYorkManhattanNY": 1.58, "Change": 24},
        "ChunkLightTuna": {"SanFranciscoCA": 1.72, "NewYorkManhattanNY": 1.58, "Change": 8},
        "WholeMilk": {"SanFranciscoCA": 4.68, "NewYorkManhattanNY": 4.35, "Change": 7},
        "Eggs": {"SanFranciscoCA": 4.75, "NewYorkManhattanNY": 4.05, "Change": 15},
        "Margarine": {"SanFranciscoCA": 2.06, "NewYorkManhattanNY": 1.84, "Change": 11},
        "ParmesanCheese": {"SanFranciscoCA": 5.53, "NewYorkManhattanNY": 5.44, "Change": 2},
        "Potatoes": {"SanFranciscoCA": 4.49, "NewYorkManhattanNY": 5.11, "Change": 14},
        "Bananas": {"SanFranciscoCA": 1.09, "NewYorkManhattanNY": 0.95, "Change": 13},
        "Lettuce": {"SanFranciscoCA": 2.32, "NewYorkManhattanNY": 2.30, "Change": 1},
        "Bread": {"SanFranciscoCA": 4.87, "NewYorkManhattanNY": 4.11, "Change": 16},
        "FreshOrangeJuice": {"SanFranciscoCA": 4.90, "NewYorkManhattanNY": 4.75, "Change": 3},
        "Coffee": {"SanFranciscoCA": 7.65, "NewYorkManhattanNY": 6.66, "Change": 13},
        "Sugar": {"SanFranciscoCA": 4.54, "NewYorkManhattanNY": 4.35, "Change": 4},
        "CornFlakes": {"SanFranciscoCA": 5.80, "NewYorkManhattanNY": 5.73, "Change": 1},
        "SweetPeas": {"SanFranciscoCA": 2.32, "NewYorkManhattanNY": 1.95, "Change": 16},
        "Peaches": {"SanFranciscoCA": 2.72, "NewYorkManhattanNY": 2.65, "Change": 3},
        "FacialTissues": {"SanFranciscoCA": 3.10, "NewYorkManhattanNY": 2.93, "Change": 5},
        "Detergent": {"SanFranciscoCA": 24.45, "NewYorkManhattanNY": 21.89, "Change": 10},
        "CookingOil": {"SanFranciscoCA": 8.44, "NewYorkManhattanNY": 8.87, "Change": 5},
        "FrozenMeal": {"SanFranciscoCA": 4.55, "NewYorkManhattanNY": 4.27, "Change": 6},
        "FrozenCorn": {"SanFranciscoCA": 2.29, "NewYorkManhattanNY": 2.29, "Change": 0},
        "PotatoChips": {"SanFranciscoCA": 4.26, "NewYorkManhattanNY": 4.39, "Change": 3},
        "SoftDrink": {"SanFranciscoCA": 3.02, "NewYorkManhattanNY": 2.87, "Change": 5}
      },
      "HousingCost": {
        "ApartmentRent": {"SanFranciscoCA": 3803.00, "NewYorkManhattanNY": 5044.00, "Change": 33},
        "HomePrice": {"SanFranciscoCA": 1463475.00, "NewYorkManhattanNY": 2645549.00, "Change": 81}
      },
      "UtilitiesCost": {
        "TotalEnergy": {"SanFranciscoCA": 289.29, "NewYorkManhattanNY": 192.64, "Change": 33},
        "Phone": {"SanFranciscoCA": 204.97, "NewYorkManhattanNY": 198.52, "Change": 3}
      },
      "TransportationCost": {
        "TireBalance": {"SanFranciscoCA": 75.95, "NewYorkManhattanNY": 74.79, "Change": 2},
        "Gasoline": {"SanFranciscoCA": 4.89, "NewYorkManhattanNY": 3.96, "Change": 19}
      },
      "HealthcareCost": {
        "OptometristVisit": {"SanFranciscoCA": 158.09, "NewYorkManhattanNY": 130.84, "Change": 17},
        "DoctorVisit": {"SanFranciscoCA": 174.03, "NewYorkManhattanNY": 154.67, "Change": 11},
        "DentistVisit": {"SanFranciscoCA": 153.93, "NewYorkManhattanNY": 159.21, "Change": 3},
        "Ibuprofen": {"SanFranciscoCA": 11.70, "NewYorkManhattanNY": 11.04, "Change": 6},
        "PrescriptionDrug": {"SanFranciscoCA": 497.57, "NewYorkManhattanNY": 418.79, "Change": 16}
      },
      "MiscellaneousCost": {
        "Hamburger": {"SanFranciscoCA": 6.61, "NewYorkManhattanNY": 6.60, "Change": 0},
        "Pizza": {"SanFranciscoCA": 15.64, "NewYorkManhattanNY": 13.08, "Change": 16},
        "FriedChicken": {"SanFranciscoCA": 5.08, "NewYorkManhattanNY": 5.67, "Change": 12},
        "Haircut": {"SanFranciscoCA": 28.05, "NewYorkManhattanNY": 31.24, "Change": 11},
        "BeautySalon": {"SanFranciscoCA": 85.54, "NewYorkManhattanNY": 75.00, "Change": 12},
        "Toothpaste": {"SanFranciscoCA": 3.83, "NewYorkManhattanNY": 4.01, "Change": 5},
        "Shampoo": {"SanFranciscoCA": 1.62, "NewYorkManhattanNY": 1.86, "Change": 15},
        "DryCleaning": {"SanFranciscoCA": 16.30, "NewYorkManhattanNY": 17.63, "Change": 8},
        "ManDressShirt": {"SanFranciscoCA": 49.08, "NewYorkManhattanNY": 44.15, "Change": 10},
        "BoyJeans": {"SanFranciscoCA": 29.82, "NewYorkManhattanNY": 30.54, "Change": 2},
        "WomenSlacks": {"SanFranciscoCA": 55.53, "NewYorkManhattanNY": 38.01, "Change": 32},
        "WasherRepair": {"SanFranciscoCA": 82.91, "NewYorkManhattanNY": 119.84, "Change": 45},
        "Newspaper": {"SanFranciscoCA": 15.65, "NewYorkManhattanNY": 12.82, "Change": 18},
        "Movie": {"SanFranciscoCA": 15.96, "NewYorkManhattanNY": 19.26, "Change": 21},
        "Yoga": {"SanFranciscoCA": 23.88, "NewYorkManhattanNY": 30.39, "Change": 27},
        "TennisBalls": {"SanFranciscoCA": 3.89, "NewYorkManhattanNY": 4.09, "Change": 5},
        "VeterinaryServices": {"SanFranciscoCA": 82.23, "NewYorkManhattanNY": 113.01, "Change": 37},
        "Beer": {"SanFranciscoCA": 10.99, "NewYorkManhattanNY": 12.28, "Change": 12},
        "Wine": {"SanFranciscoCA": 11.73, "NewYorkManhattanNY": 12.27, "Change": 5}
      }
    },
};



document.getElementById('citySelector').addEventListener('change', function() {
  updateCostTable(this.value);
});

function updateCostTable(selectedCity) {
  const costData = costOfLivingByCity[selectedCity];
  const container = d3.select('#costTableContainer').html('');

  // Create header for the table
  const header = container.append('div');
  header.append('h2').text(`${selectedCity.replace(/_/g, ' ')} (Based on $150K Salary)`);
  header.append('p').text(`Salary Needed in New York: $${costData.SalaryNeededInNewYork.toLocaleString()}`);
  header.append('p').text(`Cost of Living Increase: ${costData.CostOfLivingIncrease}%`);

  // Create a table
  const table = container.append('table');
  const tbody = table.append('tbody');

  // Format value as a dollar amount
  function formatCurrency(value) {
    return `$${parseFloat(value).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  // Loop through each category in the cost data
  Object.keys(costData).forEach((category) => {
    if (typeof costData[category] === 'object') {
      // Add a row for the category header
      tbody.append('tr')
        .append('th')
        .attr('colspan', 4)
        .text(category.replace(/([A-Z])/g, ' $1').trim()); // Format the category name
      
      // Add subheaders
      const subheader = tbody.append('tr');
      subheader.append('th').text('Item');
      subheader.append('th').text('Miami-Dade County, FL');
      subheader.append('th').text('New York (Manhattan), NY');
      subheader.append('th').text('Change');
      
      // Add data rows for each item
      Object.entries(costData[category]).forEach(([itemName, itemValues]) => {
        const row = tbody.append('tr');
        row.append('td').text(itemName.replace(/([A-Z])/g, ' $1').trim());
        row.append('td').text(formatCurrency(itemValues.MiamiDadeCountyFL || itemValues.Dallas || itemValues.LosAngelesLongBeachCA));
        row.append('td').text(formatCurrency(itemValues.NewYorkManhattanNY));
        const changeCell = row.append('td').text(`${itemValues.Change}%`);
        changeCell.style('color', itemValues.Change < 0 ? 'red' : 'green');
      });
    }
  });
}

// Initialize the table with data from the first city
updateCostTable('Miami_FL_vs_NewYork_NY');