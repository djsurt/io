## SQL Table Names

Generating from [USEEIOR model objects](https://github.com/USEPA/useeior/blob/master/format_specs/Model.md)
Table names are Row\_Column from [matrix tables](matrix/).
Source json data: [2020 US States](https://github.com/ModelEarth/OpenFootprint/tree/main/impacts/2020) - [CoLab](https://colab.research.google.com/drive/1CYKNTnLiZ_PbP5WS_dMVtYyYDIAFwzq8?usp=sharing)
Also see our [International Trade SQL](/useeio.js/footprint/)

See .yaml for [converting Matrix to SQL Tables](https://github.com/ModelEarth/OpenFootprint/blob/main/impacts/useeio/create-database-useeio.yaml)  
Make a copy of [supabase-db-loader2.py](https://github.com/ModelEarth/OpenFootprint/tree/main/prep/sql/supabase) and add .json support

| Table Name | Source |
| ----------- | ----------- |
| [Sector](https://github.com/ModelEarth/OpenFootprint/blob/main/impacts/2020/AKEEIOv1.0-s-20/sectors.json) - Commodity (6-char Detail) at US level | [sectors.json](https://github.com/ModelEarth/OpenFootprint/blob/main/impacts/2020/AKEEIOv1.0-s-20/) |
| [Factor](https://github.com/USEPA/useeior/blob/master/inst/extdata/Crosswalk_USEEIO_FlowMapping.csv) - FactorID is FlowUUID in [flows.json](/feed/view/#feed=flow) | [flows](https://github.com/USEPA/fedelemflowlist/blob/master/format%20specs/FlowList.md) |
| [Indicator](https://github.com/USEPA/useeior/blob/master/inst/extdata/USEEIO_LCIA_Indicators.csv) - Includes SimpleUnit | [indicators](https://github.com/USEPA/useeior/blob/master/format_specs/Model.md#indicators) |
| [Demand](https://github.com/USEPA/useeior/blob/master/format_specs/ModelSpecification.md#demand-vector-specifications) - type and year | Demands |
| [DataSources](https://github.com/USEPA/useeior/blob/master/format_specs/ModelSpecification.md#demand-vector-specifications) (yml) | DataSources |
| SectorCrosswalk (where are titles by year?) | <a href="https://github.com/ModelEarth/OpenFootprint/blob/main/impacts/2020/sectorcrosswalk.csv">SectorCrosswalk</a> |
| CommodityCommodityPerDollar | [A matrix](matrix/) |
| FactorSector (Impact Sector) | B matrix |
| CharacteristicImpact | C matrix |
| Impact (IndicatorSectorDirect) | [D matrix](matrix/)  |
| Commodity | [q matrix](/useeio.js/footprint/tabulator.html) |
| SectorSector (Leontief) | L matrix |
| FactorCommodityImport (Imports Commodity) | M matrix |
| IndicatorSectorIndirect (Impact Totals) | N matrix |
| CommodityIndustry<br>Value Added to FinalDemand | [U matrix](https://github.com/USEPA/useeior/blob/master/format_specs/Model.md#indicators) |
| IndustryCommodity (Make) | V matrix |
| Industry (total output) | x matrix |
| SectorSectorPerDollarDataQuality | A_d |
| FlowSectorDataQuality | B_d |
| SectorSectorDataQuality | L_d |
| ImportCommodityDataQuality | M_d |
| IndicatorSectorIndirectDataQuality | N_d |
| ProducerPurchaser (price ratio) | Phi |
| SectorYear | Rho |
| CommodityIndustryDataQuality | U_d |


<br>Rho contains sector-specific currency deflation ratios that can be used to put results into another currency year.