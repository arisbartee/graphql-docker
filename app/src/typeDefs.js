
const typeDefs = `
type MenuItem {
  name: String,
  url: String,
  selected: Boolean,
  subItems: [SubMenuItem]
}

type SubMenuItem {
  name: String,
  url: String,
  selected: Boolean
}

type Page {
		id: Int,
		name: String,
		url: String,
		lead: String,
		content: String,
		content1: String,
		content2: String,
		content3: String,
		page_title: String,
		page_keywords: String,
		meta_desc: String,
		show_gallery: Int,
		is_top_menu: Int,
		menu_position: Int
}

type Show {
  
		show_id: Int,
		show_name: String,
		hide: Int,
		show_url: String,
		theatre_name: String,
		address1: String,
		address2: String,
		short_desc: String,
		synopsis: String,
		authors: String,
		runtime: String,
		poster_image: String,
		logo: String,
		display_circle: Int,
		image_position_id: Int,
		disclaimer: String,
		off_broadway: Int,
		ibdb_prod_id: Int,
		ilnyt_show_id: String,
		preview_date: String,
		open_date: String,
		pre_sale_datetime: String,
		on_sale_datetime: String,
		ticket_service_id: Int,
		show_status_id: Int,
		category: String,
		show_page_block: String,
		thumb: String,
    showStatus: ShowStatus,
    ticketService: TicketService,
		sortName: String,
		promo_code: String
		service_url: String,
		service_phone: String,
		service_notes: String,
		service_instructions: String,
		close_notes: String,
		close_order_instructions: String
		performances: [Performance]
}

type ShowStatus {
  show_status_id: Int,
  name: String
}

type TicketService {
  ticket_service_id:  Int,
  service_name: String,
  service_abbr: String,
  promo_id: Int,
  service_url: String,
  service_phone:  String,
  service_notes:  String,
  service_instructions: String,
  close_notes: String,
  close_order_instructions: String,
  promo: Promo
}

type Promo {
  promo_id: Int,
  promo_code: String,
  merge_token_id: Int
}


type CarouselItem {
	show_id: Int,
  show_name: String,
  show_url: String,
  short_desc: String,
	logo: String,
	display_circle: Boolean,
	ilnyt_show_id: String,
	position: ImagePosition,
}


type ImagePosition {
	image_position_id: Int,
	image_position: String
}

type BroadwayFeed {
	id:String,
	show_name: String,
	show_url: String,
	theatre_name: String,
	address1: String,
	address2: String,
	short_desc: String,
	synopsis: String,
	runtime: String,
	poster_image: String,
	logo: String,
	ibdb_prod_id: String,
	ilnyt_show_id: String,
	preview_date: String,
	open_date: String,
	close_date: String,
	service_url: String,
}

type BroadwayFeedDetail {
	ilnyt_id:String,
  ibdb_id: String,
  ShowName: String,
  RunTime:String,
  Authors: String,
  Site:String,
  Desc: String,
  Venue: String,
  Address: String,
  Address2: String,
  Phone: String,
  PosterImage: String,
  PrevDate: String,
	OpenDate: String,
	BuyNow: String,
  Facebook: String,
  Twitter: String,
  YouTube: String,
  Pinterest: String,
  Instagram: String,
	MapLink: String,
	Media: [Media]
	category: String
	ShortDesc: String
}

type Media {
	image: String
	caption: String
	thumb: String
	youtube: String
}

type Category {
	name: String
}

type Performance {
	show_id: Int
	ShowName: String
	status: String
	PerformanceDate: String
	PerformanceCode: String
	isSold: Boolean
}

type PerformanceDate {
	dateTime: String
	timePart: String
}

type AcrossTheUsShow {
	Id: Int
	State: String
	City: String
	Address: String
	Name: String
	LogoUrl: String
	WebSiteUrl: String
	TicketUrl: String
	TheatreName: String
	TheatreWebSite: String
	lon: Float
	lat: Float
	Notes: String
	Times: [AcrossTheUsTime]
}

type AcrossTheUsTime {
	IdShow: Int
	Time: String
	IdPerf: Int
}

type Query {
	
	feeds: [BroadwayFeed]
	feedDetail(id: String): BroadwayFeedDetail
  topMenus: [MenuItem]
  pages: [Page]
  pageByUrl(url: String!): Page
  pageByName(name: String!): Page
	broadwayShows: [Show]
	broadwayShow(id: Int): Show
	carousel: [CarouselItem]
	categories: [Category]
	performanceDates: [PerformanceDate]
	performances: [Performance]
	acrossTheUs: [AcrossTheUsShow]
	acrosstheUsTime: [AcrossTheUsTime]
}
` 

export default typeDefs

