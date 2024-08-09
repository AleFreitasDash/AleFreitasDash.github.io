(function($) {
    /* "use strict" */
    
    var dzChartlist = function() {
        
        var screenWidth = $(window).width();
        let draw = Chart.controllers.line.__super__.draw; //draw shadow
        
        var NovaExperiencia = function() {
            var options = {
                series: [{
                    name: 'Lucro Líquido',
                    data: [100, 300, 200, 250, 200, 240, 180, 230, 200, 250, 300],
                    /* radius: 30, */
                }],
                chart: {
                    type: 'area',
                    height: 40,
                    toolbar: {
                        show: false,
                    },
                    zoom: {
                        enabled: false
                    },
                    sparkline: {
                        enabled: true
                    }
                },
                colors: ['#000'], // Cor azul para a linha
                dataLabels: {
                    enabled: true, // Habilitar a exibição dos valores
                    formatter: function(val) {
                        return 'R$ ' + val.toFixed(2); // Formatar os valores com 'R$'
                    }
                },
                legend: {
                    show: true,
                },
                stroke: {
                    show: true,
                    width: 2,
                    curve: 'straight',
                    colors: ['#000'], // Cor azul para a linha
                },
                grid: {
                    show: true,
                    borderColor: '#eee',
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: -1
                    }
                },
                states: {
                    normal: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: true,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                xaxis: {
                    categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out'],
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false,
                        style: {
                            fontSize: '12px',
                        }
                    },
                    crosshairs: {
                        show: false,
                        position: 'front',
						colors: ['#000'],
                        stroke: {
                            width: 1,
                            dashArray: 3
                        }
                    },
                    tooltip: {
                        enabled: true,
                        offsetY: 0,
                        style: {
                            fontSize: '12px',
                        }
                    }
                },
                yaxis: {
                    show: true,
					colors: ['#000'],
                },
                fill: {
                    opacity: 0.9,
                    colors: '#fff',
                    type: 'gradient',
                    gradient: {
                        colorStops: [{
                                offset: 0,
                                color: '#fff',
                                opacity: .5
                            },
                            {
                                offset: 0.6,
                                color: '#fff',
                                opacity: .5
                            },
                            {
                                offset: 100,
                                color: 'white',
                                opacity: 0
                            }
                        ],

                    }
                },
                tooltip: {
                    enabled: false,
                    style: {
                        fontSize: '12px',
                    },
                    y: {
                        formatter: function(val) {
                            return "R$ " + val.toFixed(2);
                        }
                    }
                }
            };

            var chartBar1 = new ApexCharts(document.querySelector("#NewExperience"), options);
            chartBar1.render();

        }
        var chartBar = function() {
            var options = {
                series: [{
                        name: 'Corrida',
                        data: [50, 90, 90],
                    },
                    {
                        name: 'Ciclismo',
                        data: [50, 60, 55]
                    },

                ],
                chart: {
                    type: 'bar',
                    height: 120,

                    toolbar: {
                        show: false,
                    },

                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '90%',
                        endingShape: "rounded",
                        borderRadius: 3,
                    },

                },
                states: {
                    hover: {
                        filter: 'none',
                    }
                },
                colors: ['#FFFFFF', '#FFFFFF'],
                dataLabels: {
                    enabled: false,
                    offsetY: -10
                },

                legend: {
                    show: false,
                    fontSize: '12px',
                    labels: {
                        colors: '#000000',

                    },
                    markers: {
                        width: 18,
                        height: 18,
                        strokeWidth: 8,
                        strokeColor: '#fff',
                        fillColors: undefined,
                        radius: 12,
                    }
                },
                stroke: {
                    show: true,
                    width: 14,
                    curve: 'smooth',
                    lineCap: 'round',
                    colors: ['transparent']
                },
                grid: {
                    show: false,
                    xaxis: {
                        lines: {
                            show: false,
                        }
                    },
                    yaxis: {
                        lines: {
                            show: false
                        }
                    },
                },
                xaxis: {
                    categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY'],
                    labels: {
                        show: false,
                        style: {
                            colors: '#A5AAB4',
                            fontSize: '14px',
                            fontWeight: '500',
                            fontFamily: 'poppins',
                            cssClass: 'apexcharts-xaxis-label',
                        },
                    },
                    crosshairs: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                },
                yaxis: {
                    labels: {
                        show: false,
                        offsetX: -16,
                        style: {
                            colors: '#000000',
                            fontSize: '13px',
                            fontFamily: 'poppins',
                            fontWeight: 100,
                            cssClass: 'apexcharts-xaxis-label',
                        },
                    },
                },
                fill: {

                    type: 'image',
                    opacity: 1,
                    image: {
                        src: ['images/pt1.png'],
                        width: undefined,
                        height: undefined
                    },
                    /* pattern: {
                        style: 'slantedLines',
                        width: 20,
                        height: 15,
                        strokeWidth: 2,
                        
                    }, */
                }

            };

            var chartBar1 = new ApexCharts(document.querySelector("#chartBar"), options);
            chartBar1.render();
        }
        var graficoDespesas = function() {
            var options = {
                series: [{
                        name: 'Corrida',
                        data: [50, 90, 90],
                    },
                    {
                        name: 'Ciclismo',
                        data: [50, 60, 55]
                    },

                ],
                chart: {
                    type: 'bar',
                    height: 120,

                    toolbar: {
                        show: false,
                    },

                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '90%',
                        endingShape: "rounded",
                        borderRadius: 3,
                    },

                },
                states: {
                    hover: {
                        filter: 'none',
                    }
                },
                colors: ['var(--primary)', '#FFFFFF'],
                dataLabels: {
                    enabled: false,
                    offsetY: -10
                },

                legend: {
                    show: false,
                    fontSize: '12px',
                    labels: {
                        colors: '#000000',

                    },
                    markers: {
                        width: 18,
                        height: 18,
                        strokeWidth: 8,
                        strokeColor: '#fff',
                        fillColors: undefined,
                        radius: 12,
                    }
                },
                stroke: {
                    show: true,
                    width: 14,
                    curve: 'smooth',
                    lineCap: 'round',
                    colors: ['transparent']
                },
                grid: {
                    show: false,
                    xaxis: {
                        lines: {
                            show: false,
                        }
                    },
                    yaxis: {
                        lines: {
                            show: false
                        }
                    },
                },
                xaxis: {
                    categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY'],
                    labels: {
                        show: false,
                        style: {
                            colors: '#A5AAB4',
                            fontSize: '14px',
                            fontWeight: '500',
                            fontFamily: 'poppins',
                            cssClass: 'apexcharts-xaxis-label',
                        },
                    },
                    crosshairs: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                },
                yaxis: {
                    labels: {
                        show: false,
                        offsetX: -16,
                        style: {
                            colors: '#000000',
                            fontSize: '13px',
                            fontFamily: 'poppins',
                            fontWeight: 100,
                            cssClass: 'apexcharts-xaxis-label',
                        },
                    },
                },
                fill: {
                    type: 'image',
                    opacity: 1,
                    image: {
                        src: ['images/pt-2.png'],
                        width: undefined,
                        height: undefined
                    },
                    /* pattern: {
                        style: 'slantedLines',
                        width: 20,
                        height: 15,
                        strokeWidth: 2,
                        
                    }, */
                }

            };

            var chartBar1 = new ApexCharts(document.querySelector("#expensesChart"), options);
            chartBar1.render();
        }
        var graficoImpressao = function() {
            var options = {
                series: [{
                        name: 'Esta Semana',
                        data: [50, 90, 90],
                    },
                    {
                        name: 'Semana Passada',
                        data: [50, 60, 55]
                    },

                ],
                chart: {
                    type: 'bar',
                    height: 180,

                    toolbar: {
                        show: false,
                    },

                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '90%',
                        endingShape: "rounded",
                        borderRadius: 3,
                    },

                },
                states: {
                    hover: {
                        filter: 'none',
                    }
                },
                colors: ['var(--primary)', '#FFFFFF'],
                dataLabels: {
                    enabled: false,
                    offsetY: -10
                },

                legend: {
                    show: false,
                    fontSize: '12px',
                    labels: {
                        colors: '#000000',

                    },
                    markers: {
                        width: 18,
                        height: 18,
                        strokeWidth: 8,
                        strokeColor: '#fff',
                        fillColors: undefined,
                        radius: 12,
                    }
                },
                stroke: {
                    show: true,
                    width: 14,
                    curve: 'smooth',
                    lineCap: 'round',
                    colors: ['transparent']
                },
                grid: {
                    show: false,
                    xaxis: {
                        lines: {
                            show: false,
                        }
                    },
                    yaxis: {
                        lines: {
                            show: false
                        }
                    },
                },
                xaxis: {
                    categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY'],
                    labels: {
                        show: false,
                        style: {
                            colors: '#A5AAB4',
                            fontSize: '14px',
                            fontWeight: '500',
                            fontFamily: 'poppins',
                            cssClass: 'apexcharts-xaxis-label',
                        },
                    },
                    crosshairs: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                },
                yaxis: {
                    labels: {
                        show: false,
                        offsetX: -16,
                        style: {
                            colors: '#000000',
                            fontSize: '13px',
                            fontFamily: 'poppins',
                            fontWeight: 100,
                            cssClass: 'apexcharts-xaxis-label',
                        },
                    },
                },
                fill: {
                    type: 'image',
                    opacity: 1,
                    image: {
                        src: ['images/pt-3.png'],
                        width: undefined,
                        height: undefined
                    },
                    /* pattern: {
                        style: 'slantedLines',
                        width: 20,
                        height: 15,
                        strokeWidth: 2,
                        
                    }, */
                }

            };

            var chartBar1 = new ApexCharts(document.querySelector("#impressionChart"), options);
            chartBar1.render();
        }


        var graficoVisaoGeral = function() {
            var options = {
                series: [{
                    name: 'Número de Projetos',
                    type: 'line',
                    data: [75, 85, 72, 100, 50, 100, 80, 75, 95, 35, 75, 100],
					colors: ['var(--primary)']
                }, {
                    name: 'Receita',
                    type: 'area',
                    data: [44, 65, 55, 75, 45, 55, 40, 60, 75, 45, 50, 42],
					colors: ['#dc3545']
                }, {
                    name: 'Projetos Ativos',
                    type: 'line',
                    data: [30, 25, 45, 30, 25, 35, 20, 45, 35, 20, 35, 20],
					colors: ['#ffc107']
                }],
                chart: {
                    height: 350,
                    type: 'line',
                    stacked: false,
					colors: ['var(--primary)', '#dc3545', '#ffc107'],
                    toolbar: {
                        show: false,
						colors: ['var(--primary)', '#dc3545', '#ffc107']
                    },
					colors: ['var(--primary)', '#dc3545', '#ffc107'],
                },
				colors: ['var(--primary)', '#dc3545', '#ffc107'],
                stroke: {
                    width: [3, 3, 3],
                    curve: 'straight',
                    dashArray: [0, 0, 5],
					colors: ['var(--primary)', '#dc3545', '#ffc107']
                },
                legend: {
                    fontSize: '13px',
                    fontFamily: 'poppins',
                    offsetX: 20,
                    labels: {
                        colors: '#888888', /* COR FONT LEGENDA */
                    }
                },
                plotOptions: {
                    bar: {
                        columnWidth: '30%',
                        borderRadius: 6,
                    },

                },

                fill: {

                    type: 'gradient',
                    gradient: {
                        inverseColors: false,
                        shade: 'light',
                        type: "vertical",
                        colorStops: [
                            [{
                                    offset: 0,
                                    color: 'var(--primary)',
                                    opacity: 1
                                },
                                {
                                    offset: 100,
                                    color: 'var(--primary)',
                                    opacity: 1
                                }
                            ],
                            [{
                                    offset: 0,
                                    color: '#FF7C7C',
                                    opacity: 1
                                },
                                {
                                    offset: 0.4,
                                    color: '#FF7C7C',
                                    opacity: .15
                                },
                                {
                                    offset: 100,
                                    color: '#FF7C7C',
                                    opacity: 0
                                }
                            ],
                            [{
                                offset: 0,
                                color: 'var(--primary)',
                                opacity: 1
                            }, {
                                offset: 100,
                                color: 'var(--primary)',
                                opacity: 1
                            }],
                        ],
                        stops: [0, 100, 100, 100]
                    }
                },
                colors: ['var(--primary)', '#dc3545', '#ffc107'],
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul',
                    'Ago', 'Set', 'Out', 'Nov', 'Dez'
                ],
                markers: {
                    size: 0
                },
                xaxis: {
                    type: 'month',
                    labels: {
                        style: {
                            fontSize: '13px',
                            colors: '#888888',
                        },
                    },
                },
                yaxis: {
                    min: 0,
                    tickAmount: 4,
                    labels: {
                        style: {
                            fontSize: '13px',
                            colors: '#888888',
                        },
                    },
                },
                tooltip: {
                    shared: true,
                    intersect: false,
                    y: {
                        formatter: function(y) {
                            if (typeof y !== "undefined") {
                                return 'R$ ' + y.toFixed(2);
                            }
                            return y;
                        }
                    }
                }
            };

            var chart = new ApexCharts(document.querySelector("#overiewChart"), options);
            chart.render();

            $(".mix-chart-tab .nav-link").on('click', function() {
                var seriesType = $(this).attr('data-series');
                var columnData = [];
                var areaData = [];
                var lineData = [];
                switch (seriesType) {
                    case "week":
                        columnData = [75, 85, 72, 100, 50, 100, 80, 75, 95, 35, 75, 100];
                        areaData = [44, 65, 55, 75, 45, 55, 40, 60, 75, 45, 50, 42];
                        lineData = [30, 25, 45, 30, 25, 35, 20, 45, 35, 20, 35, 20];
                        break;
                    case "month":
                        columnData = [20, 50, 80, 52, 10, 80, 50, 30, 95, 10, 60, 85];
                        areaData = [40, 25, 85, 45, 85, 25, 95, 65, 45, 45, 20, 12];
                        lineData = [65, 45, 25, 65, 45, 25, 75, 35, 65, 75, 15, 65];
                        break;
                    case "year":
                        columnData = [30, 20, 80, 52, 10, 90, 50, 30, 95, 20, 60, 85];
                        areaData = [40, 25, 40, 45, 85, 25, 50, 65, 45, 60, 20, 12];
                        lineData = [65, 45, 30, 65, 45, 25, 75, 40, 65, 50, 15, 65];
                        break;
                    case "all":
                        columnData = [20, 50, 80, 60, 10, 80, 50, 40, 95, 20, 60, 85];
                        areaData = [40, 25, 30, 45, 85, 25, 95, 65, 50, 45, 20, 12];
                        lineData = [65, 45, 25, 65, 45, 25, 30, 35, 65, 75, 15, 65];
                        break;
                    default:
                        columnData = [75, 80, 72, 100, 50, 100, 80, 30, 95, 35, 75, 100];
                        areaData = [44, 65, 55, 75, 45, 55, 40, 60, 75, 45, 50, 42];
                        lineData = [30, 25, 45, 30, 25, 35, 20, 45, 35, 30, 35, 20];
                }
                chart.updateSeries([{
                    name: "Número de Projetos",
                    type: 'line',
					color: ['var(--primary)'],
                    data: columnData
                }, {
                    name: 'Receita',
                    type: 'area',
					color: ['#dc3545'],
                    data: areaData
                }, {
                    name: 'Projetos Ativos',
                    type: 'line',
					color: ['#ffc107'],
                    data: lineData
                }]);
            })
        }
        var swiperReview = function() {

            var swiper = new Swiper('.mySwiper', {
                speed: 1500,
                parallax: true,
                slidesPerView: 4,
                spaceBetween: 20,
                autoplay: {
                    delay: 1000,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {

                    300: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    416: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1788: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                },
            });
        }
        var graficoProjetos = function() {
            var options = {
                series: [30, 40, 20],
                chart: {
                    type: 'donut',
                    width: 210,
                },

                plotOptions: {
                    pie: {
                        donut: {
                            size: '75%',
                            labels: {
                                show: true,
                                name: {
                                    show: true,
                                    offsetY: 12,
                                },
                                value: {
                                    show: true,
                                    fontSize: '24px',
                                    fontFamily: 'Arial',
                                    fontWeight: '500',
                                    offsetY: -17,
                                },
                                total: {
                                    show: true,
                                    fontSize: '11px',
                                    fontWeight: '500',
                                    fontFamily: 'Arial',
                                    label: 'Total de projetos',

                                    formatter: function(w) {
                                        return w.globals.seriesTotals.reduce((a, b) => {
                                            return a + b
                                        }, 0)
                                    }
                                }
                            }
                        }
                    }
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'butt',
                    colors: '#000',
                    width: 1,
                    dashArray: 0,
                },
                legend: {
                    show: false,
                },
                colors: ['var(--primary)', '#dc3545', '#ffc107'],
                labels: ["Masculino", "Feminino", "Outro"],
                dataLabels: {
                    enabled: false,
                },
            };
            var chartBar1 = new ApexCharts(document.querySelector("#projectChart"), options);
            chartBar1.render();

        }
        var handleWorldMap = function(trigger = 'load') {
            var vmapSelector = $('#world-map');
            if (trigger == 'resize') {
                vmapSelector.empty();
                vmapSelector.removeAttr('style');
            }

            vmapSelector.delay(300).unbind().vectorMap({
                map: 'world_en',
                backgroundColor: 'transparent',
                borderColor: 'rgb(239, 242, 244)',
                borderOpacity: 0.25,
                borderWidth: 1,
                color: 'var(--primary-light)',
                enableZoom: true,
                hoverColor: 'rgba(239, 242, 244 0.9)',
                hoverOpacity: null,
                normalizeFunction: 'linear',
                scaleColors: ['#b6d6ff', '#005ace'],
                selectedColor: 'rgba(239, 242, 244 0.9)',
                selectedRegions: null,
                showTooltip: true,
                onRegionClick: function(element, code, region) {
                    var message = 'Você clicou em "'
                        + region
                        + '" que tem o código: '
                        + code.toUpperCase();

                    alert(message);
                }
            });
        }

        /* Função ============ */
        return {
            init: function() {},
            
            load: function() {
                NovaExperiencia();
                graficoVisaoGeral();
                graficoProjetos();
                handleWorldMap();
                chartBar();
                graficoDespesas();
                graficoImpressao();
                swiperReview();
            },
            
            resize: function() {
                handleWorldMap();
            }
        }

    }();


    jQuery(window).on('load', function() {
        setTimeout(function() {
            dzChartlist.load();
        }, 1000);

    });

})(jQuery);
