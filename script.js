//set up buttons


var labelWidth=0;
// var label=['Taiwan','China','United States','Other Asia Pacific'];
// var label2=['2171','1894','589','1983'];
var width = 600
height = 300
const data = [{       
        "country": "Taiwan",
        "boxes": 108,
        "revenue": 2171
      },
      {
        "country": "China",
        "boxes": 95,
        "revenue":1894
      },
      {
        "country": "United States",
        "boxes": 30,
        "revenue": 589
      },
      {
        "country": "Other Asia Pacific",
        "boxes": 99,
        "revenue": 1983
      }
    ];
const formatrevenue = d3.format("$,");
    const colors = ["#BF046B","#D96C89",  "#CFCFCF","#CA5D9C"];
    scaleColor = d3.scaleOrdinal()
      .domain(data.map(d => d.country))
      .range(colors);


    uncount = (data, accessor) =>
      data.reduce((arr, item) => {
        const count = accessor(item)
        for (let i = 0; i < count; i++) {
          arr.push({
            ...item
          })
        }
        return arr
      }, []);

    const boxes = uncount(data, d => d.boxes);

    const nest = d3
      .nest()
      .key(d => d.country)
      .entries(boxes)

console.log(nest)

    const graph = d3.select(".chart");

    const parentGroup = graph
      .selectAll(".parent-container")
      .data(nest)
      .join("div")
      .attr("class", "parent-container");

    parentGroup
      .selectAll(".group-revenue")
      .data(d => [d])
      .join("p")
      .text(d => formatrevenue(d.values[0].revenue))
      .attr("class", "group-revenue")
      

    const group = parentGroup
      .selectAll(".container")
      .data(d => [d])
      .join("div")
      .attr("class", "container");

    group
      .selectAll(".box")
      .data(d => d.values)
      .join("div")
      .attr("class", "box")
      .style("background-color", d => scaleColor(d.country));

    parentGroup
      .selectAll(".group-country")
      .data(d => [d])
      .join("p")
      .text(d => d.key)
      .attr("class", "group-country")

   
    // graph.selectAll(".container")
    // .append("text")
    //       .attr("class","label")
    //       .text(function(d, i) { return label2[i]; })

// const groupContainer = graph
//       .selectAll(".group-container")
//       .data(nest)
//       .join("div")
//       .attr("class", "group-container");

// group.selectAll(".group-label")
// .data(d => [d])
// .join("p")
// .text(d => d.key)
// .attr("class", "group-label")

// const group = groupContainer
//       .selectAll(".group")
//       .data(d => [d])
//       .join("div")
//       .attr("class", "group");


//intitiate paused animation
// let anim = new TimelineLite({paused: false});

// anim.staggerTo(".label",0.5,{

//   scale:1,
//   ease: Power1.easeOut,

//     stagger: {
//     grid: "auto",
//     from: "start",
//     axis: "y",
//     each: 0.07
//   }


// });







TweenLite.defaultEase = Linear.easeNone;
var controller = new ScrollMagic.Controller();
let anim = new TimelineLite();
anim.staggerTo(".box", 0.2, {
  scale: 1,
  ease: Power1.easeOut,
  stagger: {
    grid: "auto",
    from: "start",
    axis: "y",
    each: 0.07

  }

});

var scene = new ScrollMagic.Scene({
    triggerElement: "#stage",
  duration: "37%",
  triggerHook: 0.35
})
  .setTween(anim)
  .addTo(controller);





  