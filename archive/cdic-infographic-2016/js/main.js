    
/******************************************************************************

                S T A R T   OF   P A R A L L A X   E F F E C T

******************************************************************************/


function parallaxScroll(){
	var scrolledY = $(window).scrollTop();
    
    var widthX = $(window).width();
    
    $('#panel1clouds').css('margin-left','-' +( (scrolledY * 0.08 ))+'px');
    
    $('#panel1birds').css('margin-top','-' +( (scrolledY * 0.1 ))+'px');
    $('#panel1birds').css('left','-' +( (scrolledY * 0.03 ))+'px');
    
    $('#panel1-preretired').css('margin-left','+' +( 90 + (scrolledY * 0.05 ))+'px');
    
    $('#panel1-75').css('margin-left','+' +( 750 + (scrolledY * 0.015 ))+'px');
};


$(document).ready(function () {
		
    $(window).bind('scroll',function(e){
        parallaxScroll();
    });
    

    
    /******************************************************************************
    
               S T A R T   OF   C H A R T   D A T A   D E C L A R A T I O N
            
    ******************************************************************************/

    
    
    
    Chart.defaults.global.legend.display = false;
    Chart.defaults.global.tooltips.enabled = false;
    
    var doughnutOptions = {
        segmentShowStroke: false,
        animateScale : true,
        cutoutPercentage : 90,
        animation : {
            duration : 2000,
            easing : "easeOutQuart"
        }
    }
    
    var barOptions = {
        segmentShowStroke: false,
        animateScale : true,
        scales: {
            xAxes : [{  
                        display : true,
                        barPercentage: 0.65,
                        gridLines : {
                            color : "rgba(0, 0, 0, 0)",
                            zeroLineColor: "rgba(0,0,0,0)"
                        }
                    }],
            yAxes: [{   
                        display : true,
                        gridLines : {
                            color : "rgba(0, 0, 0, 0)",
                            zeroLineColor: "rgba(0,0,0,0.25)"
                        },
                        ticks : {
                            display : false
                        }
                    }]
            },
        
        animation : {
            duration : 2000,
            easing : "easeOutQuart", 
        }
    }

    /**************************
            Panel5Chart1
    **************************/
    var panel5chart1Data = {
        labels: [
            "Know",
            "Did not know"
        ],
        datasets: [
            {
                data: [55, 45],
                backgroundColor: [
                    "#2db0aa",
                    "#dfdfdf"
                ],
                hoverBackgroundColor: [
                    "#2db0aa",
                    "#dfdfdf"
                ],
                
                borderColor: "rgba(225,225,225,0)"
            }]
    };
    
    /**************************
            Panel5Chart2
    **************************/
    var panel5chart2Data = {
        labels: [
            "Know",
            "Did not know"
        ],
        datasets: [
            {
                data: [52, 48],
                backgroundColor: [
                    "#2db0aa",
                    "#dfdfdf"
                ],
                hoverBackgroundColor: [
                    "#2db0aa",
                    "#dfdfdf"
                ],
                
                borderColor: "rgba(225,225,225,0)"
            }]
    };
    
    
    /**************************
            Panel5Chart3
    **************************/
    var panel5chart3Data = {
        labels: [
            "Know",
            "Did not know"
        ],
        datasets: [
            {
                data: [42, 58],
                backgroundColor: [
                    "#2db0aa",
                    "#dfdfdf"
                ],
                hoverBackgroundColor: [
                    "#2db0aa",
                    "#dfdfdf"
                ],
                
                borderColor: "rgba(225,225,225,0)"
            }]
    };
    
    
    /**************************
            Panel7Chart1
    **************************/
    var panel7chart1Data1 = {
        labels: [
            "Know",
            "Did not know"
        ],
        datasets: [
            {
                data: [22, 78],
                backgroundColor: [
                    "#582b7b",
                    "#dfdfdf"
                ],
                hoverBackgroundColor: [
                    "#582b7b",
                    "#dfdfdf"
                ],
                
                borderColor: "rgba(225,225,225,0)"
            }]
    };
    
    var panel7chart1Data2 = {
        labels: [
            "Know",
            "Did not know"
        ],
        datasets: [
            {
                data: [16, 84],
                backgroundColor: [
                    "#582b7b",
                    "#dfdfdf"
                ],
                hoverBackgroundColor: [
                    "#582b7b",
                    "#dfdfdf"
                ],
                
                borderColor: "rgba(225,225,225,0)"
            }]
    };
    
    var panel7chart1Data3 = {
        labels: [
            "Know",
            "Did not know"
        ],
        datasets: [
            {
                data: [13, 87],
                backgroundColor: [
                    "#582b7b",
                    "#dfdfdf"
                ],
                hoverBackgroundColor: [
                    "#582b7b",
                    "#dfdfdf"
                ],
                
                borderColor: "rgba(225,225,225,0)"
            }]
    };
    
    /**************************
            Panel7Chart2
    **************************/
    var panel7chart2Data1 = {
        labels: [
            "Know",
            "Did not know"
        ],
        datasets: [
            {
                data: [22, 78],
                backgroundColor: [
                    "#582b7b",
                    "#dfdfdf"
                ],
                hoverBackgroundColor: [
                    "#582b7b",
                    "#dfdfdf"
                ],
                
                borderColor: "rgba(225,225,225,0)"
            }]
    };
    
    var panel7chart2Data2 = {
        labels: [
            "Know",
            "Did not know"
        ],
        datasets: [
            {
                data: [16, 84],
                backgroundColor: [
                    "#582b7b",
                    "#dfdfdf"
                ],
                hoverBackgroundColor: [
                    "#582b7b",
                    "#dfdfdf"
                ],
                
                borderColor: "rgba(225,225,225,0)"
            }]
    };
    
    var panel7chart2Data3 = {
        labels: [
            "Know",
            "Did not know"
        ],
        datasets: [
            {
                data: [17, 83],
                backgroundColor: [
                    "#582b7b",
                    "#dfdfdf"
                ],
                hoverBackgroundColor: [
                    "#582b7b",
                    "#dfdfdf"
                ],
                
                borderColor: "rgba(225,225,225,0)"
            }]
    };
    
    /**************************
            Panel7Chart3
    **************************/
    var panel7chart3Data1 = {
        labels: [
            "Know",
            "Did not know"
        ],
        datasets: [
            {
                data: [26, 74],
                backgroundColor: [
                    "#582b7b",
                    "#dfdfdf"
                ],
                hoverBackgroundColor: [
                    "#582b7b",
                    "#dfdfdf"
                ],
                
                borderColor: "rgba(225,225,225,0)"
            }]
    };
    
    var panel7chart3Data2 = {
        labels: [
            "Know",
            "Did not know"
        ],
        datasets: [
            {
                data: [14, 86],
                backgroundColor: [
                    "#582b7b",
                    "#dfdfdf"
                ],
                hoverBackgroundColor: [
                    "#582b7b",
                    "#dfdfdf"
                ],
                
                borderColor: "rgba(225,225,225,0)"
            }]
    };
    
    var panel7chart3Data3 = {
        labels: [
            "Know",
            "Did not know"
        ],
        datasets: [
            {
                data: [18, 82],
                backgroundColor: [
                    "#582b7b",
                    "#dfdfdf"
                ],
                hoverBackgroundColor: [
                    "#582b7b",
                    "#dfdfdf"
                ],
                
                borderColor: "rgba(225,225,225,0)"
            }]
    };
    
    /**************************
            Panel7Chart4
    **************************/
    var panel7chart4Data1 = {
        labels: [
            "Know",
            "Did not know"
        ],
        datasets: [
            {
                data: [35, 65],
                backgroundColor: [
                    "#582b7b",
                    "#dfdfdf"
                ],
                hoverBackgroundColor: [
                    "#582b7b",
                    "#dfdfdf"
                ],
                
                borderColor: "rgba(225,225,225,0)"
            }]
    };
    
    var panel7chart4Data2 = {
        labels: [
            "Know",
            "Did not know"
        ],
        datasets: [
            {
                data: [30, 70],
                backgroundColor: [
                    "#582b7b",
                    "#dfdfdf"
                ],
                hoverBackgroundColor: [
                    "#582b7b",
                    "#dfdfdf"
                ],
                
                borderColor: "rgba(225,225,225,0)"
            }]
    };
    
    var panel7chart4Data3 = {
        labels: [
            "Know",
            "Did not know"
        ],
        datasets: [
            {
                data: [35, 65],
                backgroundColor: [
                    "#582b7b",
                    "#dfdfdf"
                ],
                hoverBackgroundColor: [
                    "#582b7b",
                    "#dfdfdf"
                ],
                
                borderColor: "rgba(225,225,225,0)"
            }]
    };
    
    /**************************
            Panel7Chart5
    **************************/
    var panel7chart5Data1 = {
        labels: [
            "Know",
            "Did not know"
        ],
        datasets: [
            {
                data: [63, 37],
                backgroundColor: [
                    "#582b7b",
                    "#dfdfdf"
                ],
                hoverBackgroundColor: [
                    "#582b7b",
                    "#dfdfdf"
                ],
                
                borderColor: "rgba(225,225,225,0)"
            }]
    };
    
    var panel7chart5Data2 = {
        labels: [
            "Know",
            "Did not know"
        ],
        datasets: [
            {
                data: [55, 45],
                backgroundColor: [
                    "#582b7b",
                    "#dfdfdf"
                ],
                hoverBackgroundColor: [
                    "#582b7b",
                    "#dfdfdf"
                ],
                
                borderColor: "rgba(225,225,225,0)"
            }]
    };
    
    var panel7chart5Data3 = {
        labels: [
            "Know",
            "Did not know"
        ],
        datasets: [
            {
                data: [44, 56],
                backgroundColor: [
                    "#582b7b",
                    "#dfdfdf"
                ],
                hoverBackgroundColor: [
                    "#582b7b",
                    "#dfdfdf"
                ],
                
                borderColor: "rgba(225,225,225,0)"
            }]
    };
    
    /**************************
            Panel8Chart1
    **************************/
    var panel8chart1Data1 = {
        labels: ["I don't know", "Less than $60K", "$60K to $100K", "$100K", "$100K to $250K", "$250K to $500K", "$500K and more", "No limit"],
        datasets: [
            {
                label: "Pre-Retired",
                backgroundColor: [
                    '#faa61a',
                    '#faa61a',
                    '#faa61a',
                    '#582b7b',
                    '#faa61a',
                    '#faa61a',
                    '#faa61a',
                    '#faa61a'
                ],
                borderColor: [
                    'rgba(255,99,132,0)',
                    'rgba(54, 162, 235, 0)',
                    'rgba(255, 206, 86, 0)',
                    'rgba(75, 192, 192, 0)',
                    'rgba(153, 102, 255, 0)',
                    'rgba(255, 159, 64, 0)',
                    'rgba(255, 159, 64, 0)',
                    'rgba(255, 159, 64, 0)'
                ],
                borderWidth: 0,
                data: [40.25, 14.86, 14.55, 22.76, 1.70, 1.39, 3.72, 0.77]
            }
        ]
    };
    
    var panel8chart1Data2 = {
        labels: ["I don't know", "Less than $60K", "$60K to $100K", "$100K", "$100K to $250K", "$250K to $500K", "$500K and more", "No limit"],
        datasets: [
            {
                label: "Retired",
                backgroundColor: [
                    '#faa61a',
                    '#faa61a',
                    '#faa61a',
                    '#582b7b',
                    '#faa61a',
                    '#faa61a',
                    '#faa61a',
                    '#faa61a'
                ],
                borderColor: [
                    'rgba(255,99,132,0)',
                    'rgba(54, 162, 235, 0)',
                    'rgba(255, 206, 86, 0)',
                    'rgba(75, 192, 192, 0)',
                    'rgba(153, 102, 255, 0)',
                    'rgba(255, 159, 64, 0)',
                    'rgba(255, 159, 64, 0)',
                    'rgba(255, 159, 64, 0)'
                ],
                borderWidth: 0,
                data: [42.77, 12.43, 14.16, 25.14, 1.73, 1.16, 2.31, 0.29]
            }
        ]
    };
    
    var panel8chart1Data3 = {
        labels: ["I don't know", "Less than $60K", "$60K to $100K", "$100K", "$100K to $250K", "$250K to $500K", "$500K and more", "No limit"],
        datasets: [
            {
                label: "75+",
                backgroundColor: [
                    '#faa61a',
                    '#faa61a',
                    '#faa61a',
                    '#582b7b',
                    '#faa61a',
                    '#faa61a',
                    '#faa61a',
                    '#faa61a'
                ],
                borderColor: [
                    'rgba(255,99,132,0)',
                    'rgba(54, 162, 235, 0)',
                    'rgba(255, 206, 86, 0)',
                    'rgba(75, 192, 192, 0)',
                    'rgba(153, 102, 255, 0)',
                    'rgba(255, 159, 64, 0)',
                    'rgba(255, 159, 64, 0)',
                    'rgba(255, 159, 64, 0)'
                ],
                borderWidth: 0,
                data: [57.00, 13.50, 10.50, 17.50, 1.50, 0, 0, 0]
            }
        ]
    };
    
    /**************************
          Panel9Chart1Data1
    **************************/
    var panel9chart1Data1 = {
        labels: [
            "Agree",
            "Neutral",
            "Disagree"
        ],
        datasets: [
            {
                data: [80.3, 13.8, 5.9],
                backgroundColor: [
                    "#582b7b",
                    "#2b2b2c",
                    "#faa61a"
                ],
                hoverBackgroundColor: [
                    "#582b7b",
                    "#2b2b2c",
                    "#faa61a"
                ],
                
                borderColor: "rgba(225,225,225,0)"
            }]
    };
    
    /**************************
         Panel9Chart1Data2
    **************************/
    var panel9chart1Data2 = {
        labels: [
            "Agree",
            "Neutral",
            "Disagree"
        ],
        datasets: [
            {
                data: [80.9, 12.4, 6.7],
                backgroundColor: [
                    "#582b7b",
                    "#2b2b2c",
                    "#faa61a"
                ],
                hoverBackgroundColor: [
                    "#582b7b",
                    "#2b2b2c",
                    "#faa61a"
                ],
                
                borderColor: "rgba(225,225,225,0)"
            }]
    };
    
    /**************************
         Panel9Chart1Data3
    **************************/
    var panel9chart1Data3 = {
        labels: [
            "Agree",
            "Neutral",
            "Disagree"
        ],
        datasets: [
            {
                data: [79.5, 13.5, 7],
                backgroundColor: [
                    "#582b7b",
                    "#2b2b2c",
                    "#faa61a"
                ],
                hoverBackgroundColor: [
                    "#582b7b",
                    "#2b2b2c",
                    "#faa61a"
                ],
                
                borderColor: "rgba(225,225,225,0)"
            }]
    };
    
    
    
    
    
    
    
    /**************************
          Panel10Chart1Data1
    **************************/
    var panel10chart1Data1 = {
        labels: [
            "Yes",
            "Depends",
            "No",
            "Don't Know"
        ],
        datasets: [
            {
                data: [71.1, 2.4, 6.8, 19],
                backgroundColor: [
                    "#582b7b",
                    "#2b2b2c",
                    "#faa61a",
                    "#2b2b2c"
                ],
                hoverBackgroundColor: [
                    "#582b7b",
                    "#2b2b2c",
                    "#faa61a",
                    "#2b2b2c"
                ],
                
                borderColor: "rgba(225,225,225,0)"
            }]
    };
    
    /**************************
          Panel10Chart1Data2
    **************************/
    var panel10chart1Data2 = {
        labels: [
            "Yes",
            "Depends",
            "No",
            "Don't Know"
        ],
        datasets: [
            {
                data: [77.4, 2, 5.5, 14.5],
                backgroundColor: [
                    "#582b7b",
                    "#2b2b2c",
                    "#faa61a",
                    "#2b2b2c"
                ],
                hoverBackgroundColor: [
                    "#582b7b",
                    "#2b2b2c",
                    "#faa61a",
                    "#2b2b2c"
                ],
                
                borderColor: "rgba(225,225,225,0)"
            }]
    };
    
    /**************************
          Panel10Chart1Data3
    **************************/
    var panel10chart1Data3 = {
        labels: [
            "Yes",
            "Depends",
            "No",
            "Don't Know"
        ],
        datasets: [
            {
                data: [69, 1.5, 8, 20.5],
                backgroundColor: [
                    "#582b7b",
                    "#2b2b2c",
                    "#faa61a",
                    "#2b2b2c"
                ],
                hoverBackgroundColor: [
                    "#582b7b",
                    "#2b2b2c",
                    "#faa61a",
                    "#2b2b2c"
                ],
                
                borderColor: "rgba(225,225,225,0)"
            }]
    };
    
    
    
    
    /**************************
          Panel11Chart1Data1
    **************************/
    var panel11chart1Data1 = {
        labels: [
            "Agree",
            "Neutral",
            "Disagree"
        ],
        datasets: [
            {
                data: [54.1, 24.1, 21.8],
                backgroundColor: [
                    "#582b7b",
                    "#2b2b2c",
                    "#faa61a"
                ],
                hoverBackgroundColor: [
                    "#582b7b",
                    "#2b2b2c",
                    "#faa61a"
                ],
                
                borderColor: "rgba(225,225,225,0)"
            }]
    };
    
    /**************************
          Panel11Chart1Data2
    **************************/
    var panel11chart1Data2 = {
        labels: [
            "Agree",
            "Neutral",
            "Disagree"
        ],
        datasets: [
            {
                data: [53.8, 24.5, 21.4],
                backgroundColor: [
                    "#582b7b",
                    "#2b2b2c",
                    "#faa61a"
                ],
                hoverBackgroundColor: [
                    "#582b7b",
                    "#2b2b2c",
                    "#faa61a"
                ],
                
                borderColor: "rgba(225,225,225,0)"
            }]
    };
    
    /**************************
          Panel11Chart1Data3
    **************************/
    var panel11chart1Data3 = {
        labels: [
            "Agree",
            "Neutral",
            "Disagree"
        ],
        datasets: [
            {
                data: [56, 23, 21],
                backgroundColor: [
                    "#582b7b",
                    "#2b2b2c",
                    "#faa61a"
                ],
                hoverBackgroundColor: [
                    "#582b7b",
                    "#2b2b2c",
                    "#faa61a"
                ],
                
                borderColor: "rgba(225,225,225,0)"
            }]
    };
    
    
    /******************************************************************************
    
                                    R E V I S E D
            
    ******************************************************************************/
    
    
    
    /**************************
          Panel9.1Chart1Data1
    **************************/
    var panel91chart1Data1 = {
        labels: [
            "Yes",
            "No",
            "Don't Know"
        ],
        datasets: [
            {
                data: [24.77, 47.99, 27.24],
                backgroundColor: [
                    "#582b7b",
                    "#2b2b2c",
                    "#faa61a"
                ],
                hoverBackgroundColor: [
                    "#582b7b",
                    "#2b2b2c",
                    "#faa61a"
                ],
                
                borderColor: "rgba(225,225,225,0)"
            }]
    };
    
    /**************************
          Panel9.1Chart1Data2
    **************************/
    var panel91chart1Data2 = {
        labels: [
            "Yes",
            "No",
            "Don't Know"
        ],
        datasets: [
            {
                data: [18.5, 45.66, 35.84],
                backgroundColor: [
                    "#582b7b",
                    "#2b2b2c",
                    "#faa61a"
                ],
                hoverBackgroundColor: [
                    "#582b7b",
                    "#2b2b2c",
                    "#faa61a"
                ],
                
                borderColor: "rgba(225,225,225,0)"
            }]
    };
    
    /**************************
          Panel9.1Chart1Data3
    **************************/
    var panel91chart1Data3 = {
        labels: [
            "Yes",
            "No",
            "Don't Know"
        ],
        datasets: [
            {
                data: [15.5, 48, 36.5],
                backgroundColor: [
                    "#582b7b",
                    "#2b2b2c",
                    "#faa61a"
                ],
                hoverBackgroundColor: [
                    "#582b7b",
                    "#2b2b2c",
                    "#faa61a"
                ],
                
                borderColor: "rgba(225,225,225,0)"
            }]
    };
    
    
    
    
    
    
    /**************************
          Panel11.1Chart1Data1
    **************************/
    var panel111chart1Data1 = {
        labels: [
            "Yes",
            "No",
            "Don't Know"
        ],
        datasets: [
            {
                data: [34.67, 44.74, 20.59],
                backgroundColor: [
                    "#582b7b",
                    "#2b2b2c",
                    "#faa61a"
                ],
                hoverBackgroundColor: [
                    "#582b7b",
                    "#2b2b2c",
                    "#faa61a"
                ],
                
                borderColor: "rgba(225,225,225,0)"
            }]
    };
    
    /**************************
          Panel11.1Chart1Data2
    **************************/
    var panel111chart1Data2 = {
        labels: [
            "Yes",
            "No",
            "Don't Know"
        ],
        datasets: [
            {
                data: [28.32, 47.98, 23.70],
                backgroundColor: [
                    "#582b7b",
                    "#2b2b2c",
                    "#faa61a"
                ],
                hoverBackgroundColor: [
                    "#582b7b",
                    "#2b2b2c",
                    "#faa61a"
                ],
                
                borderColor: "rgba(225,225,225,0)"
            }]
    };
    
    /**************************
          Panel11.1Chart1Data3
    **************************/
    var panel111chart1Data3 = {
        labels: [
            "Yes",
            "No",
            "Don't Know"
        ],
        datasets: [
            {
                data: [28.5, 46, 25.5],
                backgroundColor: [
                    "#582b7b",
                    "#2b2b2c",
                    "#faa61a"
                ],
                hoverBackgroundColor: [
                    "#582b7b",
                    "#2b2b2c",
                    "#faa61a"
                ],
                
                borderColor: "rgba(225,225,225,0)"
            }]
    };
    
    
    /******************************************************************************
    
                       E N D   OF   D A T A   D E C L A R A T I O N
            
    ******************************************************************************/
    
    
    
    
    
    
    
    
    
    
    
    
    /******************************************************************************
    
          S T A R T   OF   S C R O L L   +   V A R   I N I T I A L I Z A T I O N
            
    ******************************************************************************/
    
    /******************************
         In View Scroll Function
    ******************************/

            
    

    var panelCounter1 = 0;
    var panelCounter3 = 0;
    var panelCounter4 = 0;
    var panelCounter5 = 0;
    var panelCounter6 = 0;
    var panelCounter7 = 0;
    var panelCounter8 = 0;
    var panelCounter9 = 0;
    var panelCounter10 = 0;
    var panelCounter11 = 0;

    $(window).scroll(function() {
        
    /**************************
              Panel 1
    **************************/
        
//    if (($('#panel1clouds').isOnScreen() == true) && (panelCounter1 == 0)) {
//
//        panelCounter1++;
//
//        
//        $("#panel1birds").delay(4000).animate();
//    }
//    
    /**************************
              Panel 3
    **************************/

    if (($('.panel3label1').isOnScreen() == true) && (panelCounter3 == 0)) {

        panelCounter3++;

        $("#panel3age").css("opacity","0");
        $("#panel3age").delay(2000).fadeTo(500, 1 );

        $("#panel3gic").css("opacity","0");
        $("#panel3gic").fadeTo(500, 1 );

        $("#panel3total").css("opacity","0");
        $("#panel3total").delay(100).fadeTo(500, 1 );
    }
    
    /******************************
         Panel 4 Initialization
    ******************************/

    if (($('#panel4counter1').isOnScreen() == true) && (panelCounter4 == 0)) {

        panelCounter4++;

        /**************************
                  COUNTER
        **************************/

        /**************************
               Panel4Counter1
        **************************/

         var percent_number_step = $.animateNumber.numberStepFactories.append('')
            $('#panel4counter1').animateNumber(
              {
                number: 16,

                easing: 'easeInQuad',

                numberStep: percent_number_step
              },
              1000
            );

        /**************************
               Panel4Counter2
        **************************/
         var percent_number_step = $.animateNumber.numberStepFactories.append('')
            $('#panel4counter2').animateNumber(
              {
                number: 16,

                easing: 'easeInQuad',

                numberStep: percent_number_step
              },
              1000
            );

        /**************************
               Panel4Counter3
        **************************/
         var percent_number_step = $.animateNumber.numberStepFactories.append('')
            $('#panel4counter3').animateNumber(
              {
                number: 15,

                easing: 'easeInQuad',

                numberStep: percent_number_step
              },
              1000
            );

        }


    /******************************
         Panel 5 Initialization
    ******************************/
            
    if (($('#panel5chart1').isOnScreen() == true) && (panelCounter5 == 0)) {

    panelCounter5++;

    /**************************
            Panel5Chart1
    **************************/
    var panel5chart1VAR = document.getElementById("panel5chart1").getContext("2d");

    var panel5chart1 = new Chart(panel5chart1VAR, {
        type: 'doughnut',
        data: panel5chart1Data,
        options: doughnutOptions
    });

    /**************************
            Panel5Chart2
    **************************/
    var panel5chart2VAR = document.getElementById("panel5chart2").getContext("2d");

    var panel5chart2 = new Chart(panel5chart2VAR, {
        type: 'doughnut',
        data: panel5chart2Data,
        options: doughnutOptions
    });

    /**************************
            Panel5Chart3
    **************************/
    var panel5chart3VAR = document.getElementById("panel5chart3").getContext("2d");

    var panel5chart3 = new Chart(panel5chart3VAR, {
        type: 'doughnut',
        data: panel5chart3Data,
        options: doughnutOptions
    });

    /**************************
              COUNTER
    **************************/

    /**************************
           Panel5Counter1
    **************************/

     var percent_number_step = $.animateNumber.numberStepFactories.append('')
        $('#panel5counter1').animateNumber(
          {
            number: 55,

            easing: 'easeInQuad',

            numberStep: percent_number_step
          },
          1000
        );

    /**************************
           Panel5Counter2
    **************************/
     var percent_number_step = $.animateNumber.numberStepFactories.append('')
        $('#panel5counter2').animateNumber(
          {
            number: 52,

            easing: 'easeInQuad',

            numberStep: percent_number_step
          },
          1000
        );

    /**************************
           Panel5Counter3
    **************************/
     var percent_number_step = $.animateNumber.numberStepFactories.append('')
        $('#panel5counter3').animateNumber(
          {
            number: 42,

            easing: 'easeInQuad',

            numberStep: percent_number_step
          },
          1000
        );
    }
        
    
    
    /******************************
         Panel 6 Initialization
    ******************************/

    if (($('#tap-overlay6').isOnScreen() == true) && (panelCounter6 == 0)) {

        panelCounter6++;

        $("#tap-overlay6").fadeTo(1000, 1 );

        $("#tap-overlay6").delay(3500).fadeTo(1000, 0 );
           
        $("#tap-pointer1").css("-webkit-animation-play-state","running");
        $("#tap-pointer1").css("-moz-animation-play-state","running");
        $("#tap-pointer1").css("-ms-animation-play-state","running");
        $("#tap-pointer1").css("-o-animation-play-state","running");
        $("#tap-pointer1").css("animation-play-state","running");
        
        $("#tap-circle1").css("-webkit-animation-play-state","running");
        $("#tap-circle1").css("-moz-animation-play-state","running");
        $("#tap-circle1").css("-ms-animation-play-state","running");
        $("#tap-circle1").css("-o-animation-play-state","running");
        $("#tap-circle1").css("animation-play-state","running");
        
        $("#tap-circle2").css("-webkit-animation-play-state","running");
        $("#tap-circle2").css("-moz-animation-play-state","running");
        $("#tap-circle2").css("-ms-animation-play-state","running");
        $("#tap-circle2").css("-o-animation-play-state","running");
        $("#tap-circle2").css("animation-play-state","running");
        
    }
        
            

        /******************************
             Panel 7 Initialization
        ******************************/
                
    if (($('#panel7chart1').isOnScreen() == true) && (panelCounter7 == 0)) {

        panelCounter7++;

        /**************************
                  CHART
        **************************/

        /**************************
                Panel7Chart1
        **************************/
        var panel7chart1VAR = document.getElementById("panel7chart1").getContext("2d");

        var panel7chart1 = new Chart(panel7chart1VAR, {
            type: 'doughnut',
            data: panel7chart1Data1,
            options: doughnutOptions
        });



        /**************************
                Panel7Chart2
        **************************/
        var panel7chart2VAR = document.getElementById("panel7chart2").getContext("2d");

        var panel7chart2 = new Chart(panel7chart2VAR, {
            type: 'doughnut',
            data: panel7chart2Data1,
            options: doughnutOptions
        });



        /**************************
                Panel7Chart3
        **************************/

        var panel7chart3VAR = document.getElementById("panel7chart3").getContext("2d");

        var panel7chart3 = new Chart(panel7chart3VAR, {
            type: 'doughnut',
            data: panel7chart3Data1,
            options: doughnutOptions
        });

        /**************************
                Panel7Chart4
        **************************/

        var panel7chart4VAR = document.getElementById("panel7chart4").getContext("2d");

        var panel7chart4 = new Chart(panel7chart4VAR, {
            type: 'doughnut',
            data: panel7chart4Data1,
            options: doughnutOptions
        });

        /**************************
                Panel7Chart5
        **************************/

        var panel7chart5VAR = document.getElementById("panel7chart5").getContext("2d");

        var panel7chart5 = new Chart(panel7chart5VAR, {
            type: 'doughnut',
            data: panel7chart5Data1,
            options: doughnutOptions
        });

        /**************************
                  COUNTER
        **************************/

        /**************************
               Panel7Counter1
        **************************/
         var percent_number_step = $.animateNumber.numberStepFactories.append('')
            $('#panel7counter1').animateNumber(
              {
                number: 22,

                easing: 'easeInQuad',

                numberStep: percent_number_step
              },
              1000
            );

        /**************************
               Panel7Counter2
        **************************/
         var percent_number_step = $.animateNumber.numberStepFactories.append('')
            $('#panel7counter2').animateNumber(
              {
                number: 22,

                easing: 'easeInQuad',

                numberStep: percent_number_step
              },
              1000
            );

        /**************************
               Panel7Counter3
        **************************/
         var percent_number_step = $.animateNumber.numberStepFactories.append('')
            $('#panel7counter3').animateNumber(
              {
                number: 26,

                easing: 'easeInQuad',

                numberStep: percent_number_step
              },
              1000
            );

        /**************************
               Panel7Counter4
        **************************/
         var percent_number_step = $.animateNumber.numberStepFactories.append('')
            $('#panel7counter4').animateNumber(
              {
                number: 35,

                easing: 'easeInQuad',

                numberStep: percent_number_step
              },
              1000
            );

        /**************************
               Panel7Counter5
        **************************/
         var percent_number_step = $.animateNumber.numberStepFactories.append('')
            $('#panel7counter5').animateNumber(
              {
                number: 63,

                easing: 'easeInQuad',

                numberStep: percent_number_step
              },
              1000
            );
        }
            
               
        /******************************
            Panel 8 Initialization
        ******************************/

            
    if (($('#panel8chart1').isOnScreen() == true) && (panelCounter8 == 0)) {

        panelCounter8++;

        var panel8chart1VAR = document.getElementById("panel8chart1").getContext("2d");

        panel8chart1 = new Chart(panel8chart1VAR, {
            type: 'bar',
            data: panel8chart1Data1,
            options: barOptions
        });

        $("#bar-tooltip").css("opacity","0");
        $("#bar-tooltip").fadeTo(300, 1 );
        $("#bar-tooltip").css("margin-top","130px");
        $("#bar-tooltip").css("margin-left","445px");
        $("#bar-tooltip").animate({"margin-top":"75px"},600);
    }




    /******************************
        Panel 9 Initialization
    ******************************/


    if (($('#panel9chart1').isOnScreen() == true) && (panelCounter9 == 0)) {

        panelCounter9++;

        var panel9chart1VAR = document.getElementById("panel9chart1").getContext("2d");

        panel9chart1 = new Chart(panel9chart1VAR, {
            type: 'doughnut',
            data: panel91chart1Data1,
            options: doughnutOptions
        });
        
        $("#panel9icon").css("-webkit-animation-play-state","running");
        $("#panel9icon").css("-moz-animation-play-state","running");
        $("#panel9icon").css("-ms-animation-play-state","running");
        $("#panel9icon").css("-o-animation-play-state","running");
        $("#panel9icon").css("animation-play-state","running");
        
        document.getElementById("panel9-disagree").innerHTML = "27.24%";
        $("#panel9-disagree-wrapper").css("opacity","0");
        $("#panel9-disagree-wrapper").delay(800).fadeTo(1250, 1 );
        $("#panel9-disagree-wrapper").css("margin-top","3.5rem");
        $("#panel9-disagree-wrapper").css("margin-left","13.8rem");

        document.getElementById("panel9-neutral").innerHTML = "47.99%";
        $("#panel9-neutral-wrapper").css("opacity","0");
        $("#panel9-neutral-wrapper").delay(500).fadeTo(1000, 1 );
        $("#panel9-neutral-wrapper").css("margin-top","13.5rem");
        $("#panel9-neutral-wrapper").css("margin-left","14rem");

        document.getElementById("panel9-agree").innerHTML = "24.77%";
        $("#panel9-agree-wrapper").css("opacity","0");
        $("#panel9-agree-wrapper").delay(200).fadeTo(500, 1 );
        $("#panel9-agree-wrapper").css("margin-top","3.5rem");
        $("#panel9-agree-wrapper").css("margin-left","42.8rem");
    }
            
        
        /******************************
            Panel 10 Initialization
        ******************************/
                
   if (($('#panel10chart1').isOnScreen() == true) && (panelCounter10 == 0)) {

        panelCounter10++;

        var panel10chart1VAR = document.getElementById("panel10chart1").getContext("2d");

        panel10chart1 = new Chart(panel10chart1VAR, {
            type: 'doughnut',
            data: panel10chart1Data1,
            options: doughnutOptions
        });
        
        $("#panel10icon").css("-webkit-animation-play-state","running");
        $("#panel10icon").css("-moz-animation-play-state","running");
        $("#panel10icon").css("-ms-animation-play-state","running");
        $("#panel10icon").css("-o-animation-play-state","running");
        $("#panel10icon").css("animation-play-state","running");

        document.getElementById("panel10-yes").innerHTML = "71.1%";
        $("#panel10-yes-wrapper").css("opacity","0");
        $("#panel10-yes-wrapper").delay(200).fadeTo(500, 1 );
        $("#panel10-yes-wrapper").css("margin-top","11rem");
        $("#panel10-yes-wrapper").css("margin-left","43.9rem");

        document.getElementById("panel10-depends").innerHTML = "2.4%";
        $("#panel10-depends-wrapper").css("opacity","0");
        $("#panel10-depends-wrapper").delay(500).fadeTo(750, 1 );
        $("#panel10-depends-wrapper").css("margin-top","10.5rem");
        $("#panel10-depends-wrapper").css("margin-left","4.3rem");

        document.getElementById("panel10-no").innerHTML = "6.8%";
        $("#panel10-no-wrapper").css("opacity","0");
        $("#panel10-no-wrapper").delay(800).fadeTo(1000, 1 );
        $("#panel10-no-wrapper").css("margin-top","7.5rem");
        $("#panel10-no-wrapper").css("margin-left","11.5rem");


        document.getElementById("panel10-idk").innerHTML = "19%";
        $("#panel10-idk-wrapper").css("opacity","0");
        $("#panel10-idk-wrapper").delay(1100).fadeTo(1250, 1 );
        $("#panel10-idk-wrapper").css("margin-top","0rem");
        $("#panel10-idk-wrapper").css("margin-left","16.55rem");

    }
            
        
        /******************************
            Panel 11 Initialization
        ******************************/
                
    if (($('#panel11chart1').isOnScreen() == true) && (panelCounter11 == 0)) {

        panelCounter11++;

        var panel11chart1VAR = document.getElementById("panel11chart1").getContext("2d");


        panel11chart1 = new Chart(panel11chart1VAR, {
            type: 'doughnut',
            data: panel111chart1Data1,
            options: doughnutOptions
        });
        
        $("#panel11icon").css("-webkit-animation-play-state","running");
        $("#panel11icon").css("-moz-animation-play-state","running");
        $("#panel11icon").css("-ms-animation-play-state","running");
        $("#panel11icon").css("-o-animation-play-state","running");
        $("#panel11icon").css("animation-play-state","running");

        document.getElementById("panel11-agree").innerHTML = "34.67%";
        $("#panel11-agree-wrapper").css("opacity","0");
        $("#panel11-agree-wrapper").delay(200).fadeTo(500, 1 );
        $("#panel11-agree-wrapper").css("margin-top","6rem");
        $("#panel11-agree-wrapper").css("margin-left","47.05rem");

        document.getElementById("panel11-neutral").innerHTML = "44.74%";
        $("#panel11-neutral-wrapper").css("opacity","0");
        $("#panel11-neutral-wrapper").delay(500).fadeTo(750, 1 );
        $("#panel11-neutral-wrapper").css("margin-top","15rem");
        $("#panel11-neutral-wrapper").css("margin-left","11.65rem");

        document.getElementById("panel11-disagree").innerHTML = "20.59%";
        $("#panel11-disagree-wrapper").css("opacity","0");
        $("#panel11-disagree-wrapper").delay(800).fadeTo(1000, 1 );
        $("#panel11-disagree-wrapper").css("margin-top","3rem");
        $("#panel11-disagree-wrapper").css("margin-left","11rem");

        }
        
    });
    
    
    
    /******************************************************************************
    
           E N D   OF   S C R O L L   +   V A R   I N I T I A L I Z A T I O N
            
    ******************************************************************************/
    
    
    
    
    
    
    
    
    
    
    
    
    
    /******************************************************************************
    
                    S T A R T   OF   B U T T O N   C H A N G E S
            
    ******************************************************************************/
    
    /**************************
              Panel 6
    **************************/
    
    var panel6btn1 = document.getElementById('panel6btn1');
    
    
    $("#panel6btn1 svg circle").css("opacity","1");
    $("#panel6btn1 svg g path").css("fill","#2DAFA9");

    if(panel6btn1) {
        panel6btn1.addEventListener('click', function() {
            document.getElementById("panel6-text1").innerHTML = "high";
            document.getElementById("panel6-text11").innerHTML = "";
            document.getElementById("panel6-text2").innerHTML = "at their";
            document.getElementById("panel6-text21").innerHTML = "peak";
            document.getElementById("panel6-text3").innerHTML = "broad";
            document.getElementById("panel6-text31").innerHTML = "range";
            
            $("#panel6-text1").css("opacity","0");
            $("#panel6-text1").css("font-size","4.5rem");
            $("#panel6-text1").css("line-height","10rem");
            $("#panel6-text1").fadeTo(1500, 1 );
            $("#panel6-text2").css("opacity","0");
            $("#panel6-text2").css("font-size","4.5rem");
            $("#panel6-text2").delay(250).fadeTo(1500, 1 );
            $("#panel6-text21").css("opacity","0");
            $("#panel6-text21").css("font-size","4.5rem");
            $("#panel6-text21").delay(500).fadeTo(1500, 1 );
            $("#panel6-text3").css("opacity","0");
            $("#panel6-text3").css("font-size","4.5rem");
            $("#panel6-text3").delay(750).fadeTo(1500, 1 );
            $("#panel6-text31").css("opacity","0");
            $("#panel6-text31").css("font-size","4.5rem");
            $("#panel6-text31").delay(1000).fadeTo(1500, 1 );
            
            $("#panel6btn1 svg circle").css("opacity","1");
            $("#panel6btn1 svg g path").css("fill","#2DAFA9");
            
            $("#panel6btn2 svg circle").css("opacity","0.5");
            $("#panel6btn2 svg g path").css("fill","#ffffff");
            
            $("#panel6btn3 svg circle").css("opacity","0.5");
            $("#panel6btn3 svg g path").css("fill","#ffffff");
        }, false);
    }
    
    var panel6btn2 = document.getElementById('panel6btn2');

    if(panel6btn2) {
        panel6btn2.addEventListener('click', function() {
            document.getElementById("panel6-text1").innerHTML = "high";
            document.getElementById("panel6-text11").innerHTML = "";
            document.getElementById("panel6-text2").innerHTML = "market downturn";
            document.getElementById("panel6-text21").innerHTML = "";
            document.getElementById("panel6-text3").innerHTML = "fewer";
            document.getElementById("panel6-text31").innerHTML = "bank-based advisors";
            
            $("#panel6-text1").css("opacity","0");
            $("#panel6-text1").css("font-size","4.5rem");
            $("#panel6-text1").css("line-height","10rem");
            $("#panel6-text1").fadeTo(1500, 1 );
            $("#panel6-text2").css("opacity","0");
            $("#panel6-text2").css("font-size","3.5rem");
            $("#panel6-text2").delay(250).fadeTo(1500, 1 );
            $("#panel6-text3").css("opacity","0");
            $("#panel6-text3").css("font-size","3.2rem");
            $("#panel6-text3").delay(500).fadeTo(1500, 1 );
            $("#panel6-text31").css("opacity","0");
            $("#panel6-text31").css("font-size","2rem");
            $("#panel6-text31").delay(750).fadeTo(1500, 1 );
            
            $("#panel6btn1 svg circle").css("opacity","0.5");
            $("#panel6btn1 svg g path").css("fill","#ffffff");
            
            $("#panel6btn2 svg circle").css("opacity","1");
            $("#panel6btn2 svg g path").css("fill","#2DAFA9");
            
            $("#panel6btn3 svg circle").css("opacity","0.5");
            $("#panel6btn3 svg g path").css("fill","#ffffff");
            
        }, false);
    }
    
    
    var panel6btn3 = document.getElementById('panel6btn3');

    if(panel6btn3) {
        panel6btn3.addEventListener('click', function() {
            document.getElementById("panel6-text1").innerHTML = "declining";
            document.getElementById("panel6-text11").innerHTML = "(savings = income)";
            document.getElementById("panel6-text2").innerHTML = "worries about";
            document.getElementById("panel6-text21").innerHTML = "savings subsiding";
            document.getElementById("panel6-text3").innerHTML = "fewer";
            document.getElementById("panel6-text31").innerHTML = "bank-based advisors";
            
            $("#panel6-text1").css("opacity","0");
            $("#panel6-text1").css("font-size","3.2rem");
            $("#panel6-text1").css("line-height","3.85rem");
            $("#panel6-text1").fadeTo(1500, 1 );
            $("#panel6-text11").css("opacity","0");
            $("#panel6-text11").css("font-size","2rem");
            $("#panel6-text11").delay(250).fadeTo(1500, 1 );
            $("#panel6-text2").css("opacity","0");
            $("#panel6-text2").css("font-size","3.2rem");
            $("#panel6-text2").delay(500).fadeTo(1500, 1 );
            $("#panel6-text21").css("opacity","0");
            $("#panel6-text21").css("font-size","2rem");
            $("#panel6-text21").delay(750).fadeTo(1500, 1 );
            $("#panel6-text3").css("opacity","0");
            $("#panel6-text3").css("font-size","3.2rem");
            $("#panel6-text3").delay(1000).fadeTo(1500, 1 );
            $("#panel6-text31").css("opacity","0");
            $("#panel6-text31").css("font-size","2rem");
            $("#panel6-text31").delay(1250).fadeTo(1500, 1 );
            
            $("#panel6btn1 svg circle").css("opacity","0.5");
            $("#panel6btn1 svg g path").css("fill","#ffffff");
            
            $("#panel6btn2 svg circle").css("opacity","0.5");
            $("#panel6btn2 svg g path").css("fill","#ffffff");
            
            $("#panel6btn3 svg circle").css("opacity","1");
            $("#panel6btn3 svg g path").css("fill","#2DAFA9");
        }, false);
    }
    
    
    /**************************
              Panel 7
    **************************/
    
    var panel7btn1 = document.getElementById('panel7btn1');
    
    $("#panel7btn1 svg circle").css("fill","#582b7b");
    $("#panel7-btn-text1").css("color","#582b7b");
    
    if(panel7btn1) {
        panel7btn1.addEventListener('click', function() {
            
            /********************************
                  B T N   1   C H A R T S
            *********************************/
            
            var panel7chart1VAR = document.getElementById("panel7chart1").getContext("2d");

            panel7chart1 = new Chart(panel7chart1VAR, {
                type: 'doughnut',
                data: panel7chart1Data1,
                options: doughnutOptions
            });
          
            var panel7chart2VAR = document.getElementById("panel7chart2").getContext("2d");

             panel7chart2 = new Chart(panel7chart2VAR, {
                type: 'doughnut',
                data: panel7chart2Data1,
                options: doughnutOptions
            });

            var panel7chart3VAR = document.getElementById("panel7chart3").getContext("2d");

             panel7chart3 = new Chart(panel7chart3VAR, {
                type: 'doughnut',
                data: panel7chart3Data1,
                options: doughnutOptions
            });

            var panel7chart4VAR = document.getElementById("panel7chart4").getContext("2d");

             panel7chart4 = new Chart(panel7chart4VAR, {
                type: 'doughnut',
                data: panel7chart4Data1,
                options: doughnutOptions
            });

            var panel7chart5VAR = document.getElementById("panel7chart5").getContext("2d");

             panel7chart5 = new Chart(panel7chart5VAR, {
                type: 'doughnut',
                data: panel7chart5Data1,
                options: doughnutOptions
            });
            
            /*******************************
                B T N   1   C O U N T E R
            *******************************/
            
             var percent_number_step = $.animateNumber.numberStepFactories.append('')
                $('#panel7counter1').animateNumber(
                  {
                    number: 22,

                    easing: 'easeInQuad',

                    numberStep: percent_number_step
                  },
                  1000
                );

             var percent_number_step = $.animateNumber.numberStepFactories.append('')
                $('#panel7counter2').animateNumber(
                  {
                    number: 22,

                    easing: 'easeInQuad',

                    numberStep: percent_number_step
                  },
                  1000
                );

             var percent_number_step = $.animateNumber.numberStepFactories.append('')
                $('#panel7counter3').animateNumber(
                  {
                    number: 26,

                    easing: 'easeInQuad',

                    numberStep: percent_number_step
                  },
                  1000
                );

             var percent_number_step = $.animateNumber.numberStepFactories.append('')
                $('#panel7counter4').animateNumber(
                  {
                    number: 35,

                    easing: 'easeInQuad',

                    numberStep: percent_number_step
                  },
                  1000
                );

             var percent_number_step = $.animateNumber.numberStepFactories.append('')
                $('#panel7counter5').animateNumber(
                  {
                    number: 63,

                    easing: 'easeInQuad',

                    numberStep: percent_number_step
                  },
                  1000
                );

            
            
            
            document.getElementById("panel7-text1").innerHTML = "starting to";
            document.getElementById("panel7-text2").innerHTML = "decline";
            document.getElementById("panel7-text7").innerHTML = "";
            document.getElementById("panel7-text4").innerHTML = "optimistic";
            document.getElementById("panel7-text3").innerHTML = "about future earnings";
            document.getElementById("panel7-text5").innerHTML = "";
            document.getElementById("panel7-text6").innerHTML = "How the pre-retired cope with unexpected financial setbacks*";
            
            
            $("#panel7-text1").css("opacity","0");
            $("#panel7-text1").fadeTo(1500, 1 );
            $("#panel7-text2").css("opacity","0");
            $("#panel7-text2").css("font-size","4.5rem")
            $("#panel7-text2").delay(500).fadeTo(1500, 1 );
            $("#panel7-text3").css("opacity","0");
            $("#panel7-text3").delay(1150).fadeTo(1500, 1 );
            $("#panel7-text4").css("opacity","0");
            $("#panel7-text4").css("font-size","4.5rem")
            $("#panel7-text4").delay(650).fadeTo(1500, 1 );
            $("#panel7-text5").css("opacity","0");
            $("#panel7-text5").delay(1650).fadeTo(1500, 1 );
            $("#panel7-text6").css("opacity","0");
            $("#panel7-text6").fadeTo(500, 1 );
            
            
            document.getElementById("panel7-charText1").innerHTML = "STOPPED SAVING<br>DID NOT RESUME";
            document.getElementById("panel7-charText2").innerHTML = "STOPPED SAVING<br>THEN RESUME";
            
            $("#panel7-charText1").css("opacity","0");
            $("#panel7-charText1").delay(500).fadeTo(1500, 1 );
            $("#panel7-charText2").css("opacity","0");
            $("#panel7-charText2").delay(500).fadeTo(1500, 1 );
            $("#panel7-charText3").css("opacity","0");
            $("#panel7-charText3").delay(500).fadeTo(1500, 1 );
            $("#panel7-charText4").css("opacity","0");
            $("#panel7-charText4").delay(500).fadeTo(1500, 1 );
            $("#panel7-charText5").css("opacity","0");
            $("#panel7-charText5").delay(500).fadeTo(1500, 1 );
            
            $("#panel7btn1 svg circle").css("fill","#582b7b");
            
            $("#panel7btn2 svg circle").css("fill","#bcbec0");
            
            $("#panel7btn3 svg circle").css("fill","#bcbec0");
            
            $("#panel7-btn-text1").css("color","#582b7b");
            $("#panel7-btn-text2").css("color","#ffffff");
            $("#panel7-btn-text3").css("color","#ffffff");
        }, false);
    }
    
    
    var panel7btn2 = document.getElementById('panel7btn2');

    if(panel7btn2) {
        panel7btn2.addEventListener('click', function() {
            
            /********************************
                  B T N   2   C H A R T S
            *********************************/
            
            var panel7chart1VAR = document.getElementById("panel7chart1").getContext("2d");

             panel7chart1 = new Chart(panel7chart1VAR, {
                type: 'doughnut',
                data: panel7chart1Data2,
                options: doughnutOptions
            });

            var panel7chart2VAR = document.getElementById("panel7chart2").getContext("2d");

             panel7chart2 = new Chart(panel7chart2VAR, {
                type: 'doughnut',
                data: panel7chart2Data2,
                options: doughnutOptions
            });

            var panel7chart3VAR = document.getElementById("panel7chart3").getContext("2d");

             panel7chart3 = new Chart(panel7chart3VAR, {
                type: 'doughnut',
                data: panel7chart3Data2,
                options: doughnutOptions
            });

            var panel7chart4VAR = document.getElementById("panel7chart4").getContext("2d");

             panel7chart4 = new Chart(panel7chart4VAR, {
                type: 'doughnut',
                data: panel7chart4Data2,
                options: doughnutOptions
            });

            var panel7chart5VAR = document.getElementById("panel7chart5").getContext("2d");

             panel7chart5 = new Chart(panel7chart5VAR, {
                type: 'doughnut',
                data: panel7chart5Data2,
                options: doughnutOptions
            });
            
            /*******************************
                B T N   2   C O U N T E R
            *******************************/
            
             var percent_number_step = $.animateNumber.numberStepFactories.append('')
                $('#panel7counter1').animateNumber(
                  {
                    number: 16,

                    easing: 'easeInQuad',

                    numberStep: percent_number_step
                  },
                  1000
                );

             var percent_number_step = $.animateNumber.numberStepFactories.append('')
                $('#panel7counter2').animateNumber(
                  {
                    number: 16,

                    easing: 'easeInQuad',

                    numberStep: percent_number_step
                  },
                  1000
                );

             var percent_number_step = $.animateNumber.numberStepFactories.append('')
                $('#panel7counter3').animateNumber(
                  {
                    number: 14,

                    easing: 'easeInQuad',

                    numberStep: percent_number_step
                  },
                  1000
                );

             var percent_number_step = $.animateNumber.numberStepFactories.append('')
                $('#panel7counter4').animateNumber(
                  {
                    number: 30,

                    easing: 'easeInQuad',

                    numberStep: percent_number_step
                  },
                  1000
                );

             var percent_number_step = $.animateNumber.numberStepFactories.append('')
                $('#panel7counter5').animateNumber(
                  {
                    number: 55,

                    easing: 'easeInQuad',

                    numberStep: percent_number_step
                  },
                  1000
                );
            
            
            
            document.getElementById("panel7-text1").innerHTML = "much";
            document.getElementById("panel7-text2").innerHTML = "safer";
            document.getElementById("panel7-text7").innerHTML = "investments";
            document.getElementById("panel7-text4").innerHTML = "analytical";
            document.getElementById("panel7-text3").innerHTML = "about investments";
            document.getElementById("panel7-text5").innerHTML = "";
            document.getElementById("panel7-text6").innerHTML = "How the retired cope with unexpected financial setbacks*";
            
            $("#panel7-text1").css("opacity","0");
            $("#panel7-text1").fadeTo(500, 1 );
            $("#panel7-text2").css("opacity","0");
            $("#panel7-text2").css("font-size","4.5rem");
            $("#panel7-text2").delay(500).fadeTo(500, 1 );
            $("#panel7-text7").css("opacity","0");
            $("#panel7-text7").delay(800).fadeTo(500, 1 );
            $("#panel7-text3").css("opacity","0");
            $("#panel7-text3").delay(1450).fadeTo(500, 1 );
            $("#panel7-text4").css("opacity","0");
            $("#panel7-text4").css("font-size","4.5rem");
            $("#panel7-text4").delay(1050).fadeTo(500, 1 );
            $("#panel7-text5").css("opacity","0");
            $("#panel7-text5").delay(1850).fadeTo(500, 1 );
            $("#panel7-text6").css("opacity","0");
            $("#panel7-text6").fadeTo(500, 1 );
            
            
            document.getElementById("panel7-charText1").innerHTML = "MOVED TO PRODUCTS<br>CASHED MORE EASILY";
            document.getElementById("panel7-charText2").innerHTML = "MOVED TO SAFER /<br>MORE RELIABLE PRODUCTS";
            
            $("#panel7-charText1").css("opacity","0");
            $("#panel7-charText1").delay(500).fadeTo(1500, 1 );
            $("#panel7-charText2").css("opacity","0");
            $("#panel7-charText2").delay(500).fadeTo(1500, 1 );
            $("#panel7-charText3").css("opacity","0");
            $("#panel7-charText3").delay(500).fadeTo(1500, 1 );
            $("#panel7-charText4").css("opacity","0");
            $("#panel7-charText4").delay(500).fadeTo(1500, 1 );
            $("#panel7-charText5").css("opacity","0");
            $("#panel7-charText5").delay(500).fadeTo(1500, 1 );
            
            $("#panel7btn1 svg circle").css("fill","#bcbec0");
            
            $("#panel7btn2 svg circle").css("fill","#582b7b");
            
            $("#panel7btn3 svg circle").css("fill","#bcbec0");
            
            $("#panel7-btn-text1").css("color","#ffffff");
            $("#panel7-btn-text2").css("color","#582b7b");
            $("#panel7-btn-text3").css("color","#ffffff");
        }, false);
    }
    
    
    var panel7btn3 = document.getElementById('panel7btn3');

    if(panel7btn3) {
        panel7btn3.addEventListener('click', function() {
            
            /********************************
                  B T N   3   C H A R T S
            *********************************/
            
            var panel7chart1VAR = document.getElementById("panel7chart1").getContext("2d");

             panel7chart1 = new Chart(panel7chart1VAR, {
                type: 'doughnut',
                data: panel7chart1Data3,
                options: doughnutOptions
            });

            var panel7chart2VAR = document.getElementById("panel7chart2").getContext("2d");

             panel7chart2 = new Chart(panel7chart2VAR, {
                type: 'doughnut',
                data: panel7chart2Data3,
                options: doughnutOptions
            });


            var panel7chart3VAR = document.getElementById("panel7chart3").getContext("2d");

             panel7chart3 = new Chart(panel7chart3VAR, {
                type: 'doughnut',
                data: panel7chart3Data3,
                options: doughnutOptions
            });
            

            var panel7chart4VAR = document.getElementById("panel7chart4").getContext("2d");

             panel7chart4 = new Chart(panel7chart4VAR, {
                type: 'doughnut',
                data: panel7chart4Data3,
                options: doughnutOptions
            });


            var panel7chart5VAR = document.getElementById("panel7chart5").getContext("2d");

             panel7chart5 = new Chart(panel7chart5VAR, {
                type: 'doughnut',
                data: panel7chart5Data3,
                options: doughnutOptions
            });
            
            /*******************************
                B T N   3   C O U N T E R
            *******************************/
            
             var percent_number_step = $.animateNumber.numberStepFactories.append('')
                $('#panel7counter1').animateNumber(
                  {
                    number: 13,

                    easing: 'easeInQuad',

                    numberStep: percent_number_step
                  },
                  1000
                );

             var percent_number_step = $.animateNumber.numberStepFactories.append('')
                $('#panel7counter2').animateNumber(
                  {
                    number: 17,

                    easing: 'easeInQuad',

                    numberStep: percent_number_step
                  },
                  1000
                );

             var percent_number_step = $.animateNumber.numberStepFactories.append('')
                $('#panel7counter3').animateNumber(
                  {
                    number: 18,

                    easing: 'easeInQuad',

                    numberStep: percent_number_step
                  },
                  1000
                );

             var percent_number_step = $.animateNumber.numberStepFactories.append('')
                $('#panel7counter4').animateNumber(
                  {
                    number: 35,

                    easing: 'easeInQuad',

                    numberStep: percent_number_step
                  },
                  1000
                );

             var percent_number_step = $.animateNumber.numberStepFactories.append('')
                $('#panel7counter5').animateNumber(
                  {
                    number: 44,

                    easing: 'easeInQuad',

                    numberStep: percent_number_step
                  },
                  1000
                );
            
            
            
            document.getElementById("panel7-text1").innerHTML = "risks are";
            document.getElementById("panel7-text2").innerHTML = "low";
            document.getElementById("panel7-text7").innerHTML = "<br>";
            document.getElementById("panel7-text4").innerHTML = "analytical";
            document.getElementById("panel7-text3").innerHTML = "about investments";
            document.getElementById("panel7-text5").innerHTML = "";
            document.getElementById("panel7-text6").innerHTML = "How 75+ cope with unexpected financial setbacks*";
            
            $("#panel7-text1").css("opacity","0");
            $("#panel7-text1").fadeTo(500, 1 );
            $("#panel7-text2").css("opacity","0");
            $("#panel7-text2").css("font-size","4.5rem");
            $("#panel7-text2").delay(500).fadeTo(500, 1 );
            $("#panel7-text7").css("opacity","0");
            $("#panel7-text7").delay(800).fadeTo(500, 1 );
            $("#panel7-text3").css("opacity","0");
            $("#panel7-text3").delay(1450).fadeTo(500, 1 );
            $("#panel7-text4").css("opacity","0");
            $("#panel7-text4").css("font-size","4.5rem");
            $("#panel7-text4").delay(1050).fadeTo(500, 1 );
            $("#panel7-text5").css("opacity","0");
            $("#panel7-text5").delay(1850).fadeTo(500, 1 );
            $("#panel7-text6").css("opacity","0");
            $("#panel7-text6").fadeTo(500, 1 );
            
            
            document.getElementById("panel7-charText1").innerHTML = "MOVED TO PRODUCTS<br>CASHED MORE EASILY";
            document.getElementById("panel7-charText2").innerHTML = "MOVED TO SAFER /<br>MORE RELIABLE PRODUCTS";
            
            $("#panel7-charText1").css("opacity","0");
            $("#panel7-charText1").delay(500).fadeTo(1500, 1 );
            $("#panel7-charText2").css("opacity","0");
            $("#panel7-charText2").delay(500).fadeTo(1500, 1 );
            $("#panel7-charText3").css("opacity","0");
            $("#panel7-charText3").delay(500).fadeTo(1500, 1 );
            $("#panel7-charText4").css("opacity","0");
            $("#panel7-charText4").delay(500).fadeTo(1500, 1 );
            $("#panel7-charText5").css("opacity","0");
            $("#panel7-charText5").delay(500).fadeTo(1500, 1 );
            
            $("#panel7btn1 svg circle").css("fill","#bcbec0");
            
            $("#panel7btn2 svg circle").css("fill","#bcbec0");
            
            $("#panel7btn3 svg circle").css("fill","#582b7b");
            
            $("#panel7-btn-text1").css("color","#ffffff");
            $("#panel7-btn-text2").css("color","#ffffff");
            $("#panel7-btn-text3").css("color","#582b7b");
        }, false);
    }
    
    
    /**************************
              Panel 8
    **************************/
    
    var panel8btn1 = document.getElementById('panel8btn1');
    
    $("#panel8btn1 svg circle").css("fill","#582b7b");
            
    $("#panel8-btn-text1").css("color","#582b7b");

    if(panel8btn1) {
        panel8btn1.addEventListener('click', function() {
            
            panel8chart1.destroy();

            var panel8chart1VAR = document.getElementById("panel8chart1").getContext("2d");

            panel8chart1 = new Chart(panel8chart1VAR, {
                type: 'bar',
                data: panel8chart1Data1,
                options: barOptions
            });
            
            document.getElementById("bar-tooltip").innerHTML = "22.8%";
            $("#bar-tooltip").css("opacity","0");
            $("#bar-tooltip").fadeTo(300, 1 );
            $("#bar-tooltip").css("margin-top","125px");
            $("#bar-tooltip").css("margin-left","445px");
            $("#bar-tooltip").animate({"margin-top":"75px"},600);
            
            $("#panel8btn1 svg circle").css("fill","#582b7b");
            
            $("#panel8btn2 svg circle").css("fill","#bcbec0");
            
            $("#panel8btn3 svg circle").css("fill","#bcbec0");
            
            $("#panel8-btn-text1").css("color","#582b7b");
            $("#panel8-btn-text2").css("color","#bcbec0");
            $("#panel8-btn-text3").css("color","#bcbec0");
                
        }, false);
    }
    
    
    var panel8btn2 = document.getElementById('panel8btn2');

    if(panel8btn2) {
        panel8btn2.addEventListener('click', function() {
            
            panel8chart1.destroy();

            var panel8chart1VAR = document.getElementById("panel8chart1").getContext("2d");

            panel8chart1 = new Chart(panel8chart1VAR, {
                type: 'bar',
                data: panel8chart1Data2,
                options: barOptions
            });
            
            document.getElementById("bar-tooltip").innerHTML = "25.2%";
            $("#bar-tooltip").css("opacity","0");
            $("#bar-tooltip").fadeTo(300, 1 );
            $("#bar-tooltip").css("margin-top","115px");
            $("#bar-tooltip").css("margin-left","445px");
            $("#bar-tooltip").animate({"margin-top":"60px"},600);
            
            $("#panel8btn1 svg circle").css("fill","#bcbec0");
            
            $("#panel8btn2 svg circle").css("fill","#582b7b");
            
            $("#panel8btn3 svg circle").css("fill","#bcbec0");
            
            $("#panel8-btn-text1").css("color","#bcbec0");
            $("#panel8-btn-text2").css("color","#582b7b");
            $("#panel8-btn-text3").css("color","#bcbec0");
                
        }, false);
    }
    
    var panel8btn3 = document.getElementById('panel8btn3');

    if(panel8btn3) {
        panel8btn3.addEventListener('click', function() {
            
            panel8chart1.destroy();

            var panel8chart1VAR = document.getElementById("panel8chart1").getContext("2d");

            panel8chart1 = new Chart(panel8chart1VAR, {
                type: 'bar',
                data: panel8chart1Data3,
                options: barOptions
            });
            
            document.getElementById("bar-tooltip").innerHTML = "17.5%";
            $("#bar-tooltip").css("opacity","0");
            $("#bar-tooltip").fadeTo(300, 1 );
            $("#bar-tooltip").css("margin-top","169px");
            $("#bar-tooltip").css("margin-left","445px");
            $("#bar-tooltip").animate({"margin-top":"125px"},600);
            
            $("#panel8btn1 svg circle").css("fill","#bcbec0");
            
            $("#panel8btn2 svg circle").css("fill","#bcbec0");
            
            $("#panel8btn3 svg circle").css("fill","#582b7b");
            
            $("#panel8-btn-text1").css("color","#bcbec0");
            $("#panel8-btn-text2").css("color","#bcbec0");
            $("#panel8-btn-text3").css("color","#582b7b");
            
        }, false);
    }
    
    
    /**************************
              Panel 9
    **************************/
    
    var panel9btn1 = document.getElementById('panel9btn1');
    
    
    $("#panel9btn1 svg circle").css("opacity","1");
    $("#panel9btn1 svg g path").css("fill","#2DAFA9");

    if(panel9btn1) {
        panel9btn1.addEventListener('click', function() {
            
            panel9chart1.destroy();

            var panel9chart1VAR = document.getElementById("panel9chart1").getContext("2d");

            panel9chart1 = new Chart(panel9chart1VAR, {
                type: 'doughnut',
                data: panel91chart1Data1,
                options: doughnutOptions
            });
            
            document.getElementById("panel9-disagree").innerHTML = "27.24%";
            $("#panel9-disagree-wrapper").css("opacity","0");
            $("#panel9-disagree-wrapper").delay(800).fadeTo(500, 1 );
            $("#panel9-disagree-wrapper").css("margin-top","3.5rem");
            $("#panel9-disagree-wrapper").css("margin-left","13.8rem");
            
            document.getElementById("panel9-neutral").innerHTML = "47.99%";
            $("#panel9-neutral-wrapper").css("opacity","0");
            $("#panel9-neutral-wrapper").delay(500).fadeTo(500, 1 );
            $("#panel9-neutral-wrapper").css("margin-top","13.5rem");
            $("#panel9-neutral-wrapper").css("margin-left","14rem");
            
            document.getElementById("panel9-agree").innerHTML = "24.77%";
            $("#panel9-agree-wrapper").css("opacity","0");
            $("#panel9-agree-wrapper").delay(200).fadeTo(500, 1 );
            $("#panel9-agree-wrapper").css("margin-top","3.5rem");
            $("#panel9-agree-wrapper").css("margin-left","42.8rem");
            
            
            
            $("#panel9btn1 svg circle").css("opacity","1");
            $("#panel9btn1 svg g path").css("fill","#2DAFA9");
            
            $("#panel9btn2 svg circle").css("opacity","0.5");
            $("#panel9btn2 svg g path").css("fill","#ffffff");
            
            $("#panel9btn3 svg circle").css("opacity","0.5");
            $("#panel9btn3 svg g path").css("fill","#ffffff");
        }, false);
    }
    
    var panel9btn2 = document.getElementById('panel9btn2');

    if(panel9btn2) {
        panel9btn2.addEventListener('click', function() {
            
            panel9chart1.destroy();

            var panel9chart1VAR = document.getElementById("panel9chart1").getContext("2d");

            panel9chart1 = new Chart(panel9chart1VAR, {
                type: 'doughnut',
                data: panel91chart1Data2,
                options: doughnutOptions
            });
            
            document.getElementById("panel9-disagree").innerHTML = "35.84%";
            $("#panel9-disagree-wrapper").css("opacity","0");
            $("#panel9-disagree-wrapper").delay(800).fadeTo(500, 1 );
            $("#panel9-disagree-wrapper").css("margin-top","3rem");
            $("#panel9-disagree-wrapper").css("margin-left","14.25rem");
            
            document.getElementById("panel9-neutral").innerHTML = "45.66%";
            $("#panel9-neutral-wrapper").css("opacity","0");
            $("#panel9-neutral-wrapper").delay(500).fadeTo(500, 1 );
            $("#panel9-neutral-wrapper").css("margin-top","15.5rem");
            $("#panel9-neutral-wrapper").css("margin-left","15.35rem");
            
            document.getElementById("panel9-agree").innerHTML = "18.5%";
            $("#panel9-agree-wrapper").css("opacity","0");
            $("#panel9-agree-wrapper").delay(200).fadeTo(500, 1 );
            $("#panel9-agree-wrapper").css("margin-top","1.5rem");
            $("#panel9-agree-wrapper").css("margin-left","41rem");
            
            
            
            $("#panel9btn1 svg circle").css("opacity","0.5");
            $("#panel9btn1 svg g path").css("fill","#ffffff");
            
            $("#panel9btn2 svg circle").css("opacity","1");
            $("#panel9btn2 svg g path").css("fill","#2DAFA9");
            
            $("#panel9btn3 svg circle").css("opacity","0.5");
            $("#panel9btn3 svg g path").css("fill","#ffffff");
            
        }, false);
    }
    
    
    var panel9btn3 = document.getElementById('panel9btn3');

    if(panel9btn3) {
        panel9btn3.addEventListener('click', function() {
            
            panel9chart1.destroy();

            var panel9chart1VAR = document.getElementById("panel9chart1").getContext("2d");

            panel9chart1 = new Chart(panel9chart1VAR, {
                type: 'doughnut',
                data: panel91chart1Data3,
                options: doughnutOptions
            });
            
            document.getElementById("panel9-disagree").innerHTML = "36.5%";
            $("#panel9-disagree-wrapper").css("opacity","0");
            $("#panel9-disagree-wrapper").delay(800).fadeTo(500, 1 );
            $("#panel9-disagree-wrapper").css("margin-top","3rem");
            $("#panel9-disagree-wrapper").css("margin-left","13rem");
            
            document.getElementById("panel9-neutral").innerHTML = "48%";
            $("#panel9-neutral-wrapper").css("opacity","0");
            $("#panel9-neutral-wrapper").delay(500).fadeTo(500, 1 );
            $("#panel9-neutral-wrapper").css("margin-top","15.5rem");
            $("#panel9-neutral-wrapper").css("margin-left","15rem");
            
            document.getElementById("panel9-agree").innerHTML = "15.5%";
            $("#panel9-agree-wrapper").css("opacity","0");
            $("#panel9-agree-wrapper").delay(200).fadeTo(500, 1 );
            $("#panel9-agree-wrapper").css("margin-top","2rem");
            $("#panel9-agree-wrapper").css("margin-left","41.25rem");
            
            
            
            $("#panel9btn1 svg circle").css("opacity","0.5");
            $("#panel9btn1 svg g path").css("fill","#ffffff");
            
            $("#panel9btn2 svg circle").css("opacity","0.5");
            $("#panel9btn2 svg g path").css("fill","#ffffff");
            
            $("#panel9btn3 svg circle").css("opacity","1");
            $("#panel9btn3 svg g path").css("fill","#2DAFA9");
        }, false);
    }
    
    
    /**************************
              Panel 10
    **************************/
    
    var panel10btn1 = document.getElementById('panel10btn1');
    
    $("#panel10btn1 svg circle").css("fill","#582b7b");
    $("#panel10-btn-text1").css("color","#582b7b");

    if(panel10btn1) {
        panel10btn1.addEventListener('click', function() {
            
            panel10chart1.destroy();

            var panel10chart1VAR = document.getElementById("panel10chart1").getContext("2d");

            panel10chart1 = new Chart(panel10chart1VAR, {
                type: 'doughnut',
                data: panel10chart1Data1,
                options: doughnutOptions
            });
            
            document.getElementById("panel10-yes").innerHTML = "71.1%";
            $("#panel10-yes-wrapper").css("opacity","0");
            $("#panel10-yes-wrapper").delay(200).fadeTo(500, 1 );
            $("#panel10-yes-wrapper").css("margin-top","11rem");
            $("#panel10-yes-wrapper").css("margin-left","43.9rem");
            
            document.getElementById("panel10-depends").innerHTML = "2.4%";
            $("#panel10-depends-wrapper").css("opacity","0");
            $("#panel10-depends-wrapper").delay(500).fadeTo(500, 1 );
            $("#panel10-depends-wrapper").css("margin-top","10.5rem");
            $("#panel10-depends-wrapper").css("margin-left","4.3rem");
            
            document.getElementById("panel10-no").innerHTML = "6.8%";
            $("#panel10-no-wrapper").css("opacity","0");
            $("#panel10-no-wrapper").delay(800).fadeTo(500, 1 );
            $("#panel10-no-wrapper").css("margin-top","7.5rem");
            $("#panel10-no-wrapper").css("margin-left","11.5rem");
            
            
            document.getElementById("panel10-idk").innerHTML = "19%";
            $("#panel10-idk-wrapper").css("opacity","0");
            $("#panel10-idk-wrapper").delay(1100).fadeTo(500, 1 );
            $("#panel10-idk-wrapper").css("margin-top","0rem");
            $("#panel10-idk-wrapper").css("margin-left","16.55rem");
            
            
            
            $("#panel10btn1 svg circle").css("fill","#582b7b");
            
            $("#panel10btn2 svg circle").css("fill","#bcbec0");
            
            $("#panel10btn3 svg circle").css("fill","#bcbec0");
            
            $("#panel10-btn-text1").css("color","#582b7b");
            $("#panel10-btn-text2").css("color","#bcbec0");
            $("#panel10-btn-text3").css("color","#bcbec0");
        }, false);
        
    }
        
        
        
    var panel10btn2 = document.getElementById('panel10btn2');

    if(panel10btn2) {
        panel10btn2.addEventListener('click', function() {
            
            panel10chart1.destroy();

            var panel10chart1VAR = document.getElementById("panel10chart1").getContext("2d");

            panel10chart1 = new Chart(panel10chart1VAR, {
                type: 'doughnut',
                data: panel10chart1Data1,
                options: doughnutOptions
            });
            
            document.getElementById("panel10-yes").innerHTML = "77.4%";
            $("#panel10-yes-wrapper").css("opacity","0");
            $("#panel10-yes-wrapper").delay(200).fadeTo(500, 1 );
            $("#panel10-yes-wrapper").css("margin-top","11rem");
            $("#panel10-yes-wrapper").css("margin-left","43.9rem");
            
            document.getElementById("panel10-depends").innerHTML = "2%";
            $("#panel10-depends-wrapper").css("opacity","0");
            $("#panel10-depends-wrapper").delay(500).fadeTo(500, 1 );
            $("#panel10-depends-wrapper").css("margin-top","10.5rem");
            $("#panel10-depends-wrapper").css("margin-left","4.7rem");
            
            document.getElementById("panel10-no").innerHTML = "5.5%";
            $("#panel10-no-wrapper").css("opacity","0");
            $("#panel10-no-wrapper").delay(800).fadeTo(500, 1 );
            $("#panel10-no-wrapper").css("margin-top","7.5rem");
            $("#panel10-no-wrapper").css("margin-left","11.5rem");
            
            
            document.getElementById("panel10-idk").innerHTML = "14.5%";
            $("#panel10-idk-wrapper").css("opacity","0");
            $("#panel10-idk-wrapper").delay(1100).fadeTo(500, 1 );
            $("#panel10-idk-wrapper").css("margin-top","0rem");
            $("#panel10-idk-wrapper").css("margin-left","16.55rem");
            
            
            
            $("#panel10btn1 svg circle").css("fill","#bcbec0");
            
            $("#panel10btn2 svg circle").css("fill","#582b7b");
            
            $("#panel10btn3 svg circle").css("fill","#bcbec0");
            
            $("#panel10-btn-text1").css("color","#bcbec0");
            $("#panel10-btn-text2").css("color","#582b7b");
            $("#panel10-btn-text3").css("color","#bcbec0");
        }, false);
    }
        
        
        
        
    var panel10btn3 = document.getElementById('panel10btn3');

    if(panel10btn3) {
        panel10btn3.addEventListener('click', function() {
            
            panel10chart1.destroy();

            var panel10chart1VAR = document.getElementById("panel10chart1").getContext("2d");

            panel10chart1 = new Chart(panel10chart1VAR, {
                type: 'doughnut',
                data: panel10chart1Data1,
                options: doughnutOptions
            });
            
            document.getElementById("panel10-yes").innerHTML = "69%";
            $("#panel10-yes-wrapper").css("opacity","0");
            $("#panel10-yes-wrapper").delay(200).fadeTo(500, 1 );
            $("#panel10-yes-wrapper").css("margin-top","11rem");
            $("#panel10-yes-wrapper").css("margin-left","43.9rem");
            
            document.getElementById("panel10-depends").innerHTML = "1.5%";
            $("#panel10-depends-wrapper").css("opacity","0");
            $("#panel10-depends-wrapper").delay(500).fadeTo(500, 1 );
            $("#panel10-depends-wrapper").css("margin-top","10.5rem");
            $("#panel10-depends-wrapper").css("margin-left","4.3rem");
            
            document.getElementById("panel10-no").innerHTML = "8%";
            $("#panel10-no-wrapper").css("opacity","0");
            $("#panel10-no-wrapper").delay(800).fadeTo(500, 1 );
            $("#panel10-no-wrapper").css("margin-top","7.5rem");
            $("#panel10-no-wrapper").css("margin-left","12rem");
            
            
            document.getElementById("panel10-idk").innerHTML = "20.5%";
            $("#panel10-idk-wrapper").css("opacity","0");
            $("#panel10-idk-wrapper").delay(1100).fadeTo(500, 1 );
            $("#panel10-idk-wrapper").css("margin-top","0rem");
            $("#panel10-idk-wrapper").css("margin-left","16.55rem");
            
            
            
            $("#panel10btn1 svg circle").css("fill","#bcbec0");
            
            $("#panel10btn2 svg circle").css("fill","#bcbec0");
            
            $("#panel10btn3 svg circle").css("fill","#582b7b");
            
            $("#panel10-btn-text1").css("color","#bcbec0");
            $("#panel10-btn-text2").css("color","#bcbec0");
            $("#panel10-btn-text3").css("color","#582b7b");
        }, false);
    }
    
    /**************************
              Panel 11
    **************************/
    
    var panel11btn1 = document.getElementById('panel11btn1');
    
    
    $("#panel11btn1 svg circle").css("opacity","1");
    $("#panel11btn1 svg g path").css("fill","#414042");

    if(panel11btn1) {
        panel11btn1.addEventListener('click', function() {
            
            panel11chart1.destroy();

            var panel11chart1VAR = document.getElementById("panel11chart1").getContext("2d");

            panel11chart1 = new Chart(panel11chart1VAR, {
                type: 'doughnut',
                data: panel111chart1Data1,
                options: doughnutOptions
            });
            
            document.getElementById("panel11-agree").innerHTML = "34.67%";
            $("#panel11-agree-wrapper").css("opacity","0");
            $("#panel11-agree-wrapper").delay(200).fadeTo(500, 1 );
            $("#panel11-agree-wrapper").css("margin-top","6rem");
            $("#panel11-agree-wrapper").css("margin-left","47.05rem");
            
            document.getElementById("panel11-neutral").innerHTML = "44.74%";
            $("#panel11-neutral-wrapper").css("opacity","0");
            $("#panel11-neutral-wrapper").delay(500).fadeTo(500, 1 );
            $("#panel11-neutral-wrapper").css("margin-top","15rem");
            $("#panel11-neutral-wrapper").css("margin-left","11.65rem");
            
            document.getElementById("panel11-disagree").innerHTML = "20.59%";
            $("#panel11-disagree-wrapper").css("opacity","0");
            $("#panel11-disagree-wrapper").delay(800).fadeTo(500, 1 );
            $("#panel11-disagree-wrapper").css("margin-top","3rem");
            $("#panel11-disagree-wrapper").css("margin-left","11rem");
            
            
            
            $("#panel11btn1 svg circle").css("opacity","1");
            $("#panel11btn1 svg g path").css("fill","#414042");
            
            $("#panel11btn2 svg circle").css("opacity","0.5");
            $("#panel11btn2 svg g path").css("fill","#ffffff");
            
            $("#panel11btn3 svg circle").css("opacity","0.5");
            $("#panel11btn3 svg g path").css("fill","#ffffff");
        }, false);
        
    }
    
    
    var panel11btn2 = document.getElementById('panel11btn2');

    if(panel11btn2) {
        panel11btn2.addEventListener('click', function() {
            
            panel11chart1.destroy();

            var panel11chart1VAR = document.getElementById("panel11chart1").getContext("2d");

            panel11chart1 = new Chart(panel11chart1VAR, {
                type: 'doughnut',
                data: panel111chart1Data2,
                options: doughnutOptions
            });
            
            document.getElementById("panel11-agree").innerHTML = "28.32%";
            $("#panel11-agree-wrapper").css("opacity","0");
            $("#panel11-agree-wrapper").delay(200).fadeTo(500, 1 );
            $("#panel11-agree-wrapper").css("margin-top","6rem");
            $("#panel11-agree-wrapper").css("margin-left","47.05rem");
            
            document.getElementById("panel11-neutral").innerHTML = "47.98%";
            $("#panel11-neutral-wrapper").css("opacity","0");
            $("#panel11-neutral-wrapper").delay(500).fadeTo(500, 1 );
            $("#panel11-neutral-wrapper").css("margin-top","15rem");
            $("#panel11-neutral-wrapper").css("margin-left","11.65rem");
            
            document.getElementById("panel11-disagree").innerHTML = "23.70%";
            $("#panel11-disagree-wrapper").css("opacity","0");
            $("#panel11-disagree-wrapper").delay(800).fadeTo(500, 1 );
            $("#panel11-disagree-wrapper").css("margin-top","3rem");
            $("#panel11-disagree-wrapper").css("margin-left","11rem");
            
            
            
            $("#panel11btn1 svg circle").css("opacity","0.5");
            $("#panel11btn1 svg g path").css("fill","#ffffff");
            
            $("#panel11btn2 svg circle").css("opacity","1");
            $("#panel11btn2 svg g path").css("fill","#414042");
            
            $("#panel11btn3 svg circle").css("opacity","0.5");
            $("#panel11btn3 svg g path").css("fill","#ffffff");
        }, false);
        
    }
    
    var panel11btn3 = document.getElementById('panel11btn3');

    if(panel11btn3) {
        panel11btn3.addEventListener('click', function() {
            
            panel11chart1.destroy();

            var panel11chart1VAR = document.getElementById("panel11chart1").getContext("2d");

            panel11chart1 = new Chart(panel11chart1VAR, {
                type: 'doughnut',
                data: panel111chart1Data3,
                options: doughnutOptions
            });
            
            document.getElementById("panel11-agree").innerHTML = "28.5%";
            $("#panel11-agree-wrapper").css("opacity","0");
            $("#panel11-agree-wrapper").delay(200).fadeTo(500, 1 );
            $("#panel11-agree-wrapper").css("margin-top","6rem");
            $("#panel11-agree-wrapper").css("margin-left","47.05rem");
            
            document.getElementById("panel11-neutral").innerHTML = "46%";
            $("#panel11-neutral-wrapper").css("opacity","0");
            $("#panel11-neutral-wrapper").delay(500).fadeTo(500, 1 );
            $("#panel11-neutral-wrapper").css("margin-top","15rem");
            $("#panel11-neutral-wrapper").css("margin-left","10.65rem");
            
            document.getElementById("panel11-disagree").innerHTML = "25.5%";
            $("#panel11-disagree-wrapper").css("opacity","0");
            $("#panel11-disagree-wrapper").delay(800).fadeTo(500, 1 );
            $("#panel11-disagree-wrapper").css("margin-top","3rem");
            $("#panel11-disagree-wrapper").css("margin-left","9.5rem");
            
            
            
            $("#panel11btn1 svg circle").css("opacity","0.5");
            $("#panel11btn1 svg g path").css("fill","#ffffff");
            
            $("#panel11btn2 svg circle").css("opacity","0.5");
            $("#panel11btn2 svg g path").css("fill","#ffffff");
            
            $("#panel11btn3 svg circle").css("opacity","1");
            $("#panel11btn3 svg g path").css("fill","#414042");
        }, false);
        
    }
        
        
    
    /******************************************************************************
    
                      E N D   OF   B U T T O N   C H A N G E S
            
    ******************************************************************************/
    
    
    
    
});




/******************************************************************************
    
                          E N D   OF   F I L E
            
******************************************************************************/