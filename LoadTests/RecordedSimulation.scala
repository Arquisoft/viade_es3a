
import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class RecordedSimulation extends Simulation {

	val httpProtocol = http
		.baseUrl("https://arquisoft.github.io")
		.inferHtmlResources()
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("es-ES,es;q=0.9,en;q=0.8")
		.userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36")

	val headers_0 = Map(
		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
		"Sec-Fetch-Dest" -> "document",
		"Sec-Fetch-Mode" -> "navigate",
		"Sec-Fetch-Site" -> "same-origin",
		"Sec-Fetch-User" -> "?1",
		"Upgrade-Insecure-Requests" -> "1")

	val headers_1 = Map(
		"Sec-Fetch-Dest" -> "empty",
		"Sec-Fetch-Mode" -> "no-cors",
		"Sec-Fetch-Site" -> "none")

	val headers_2 = Map(
		"Accept" -> "image/webp,image/apng,image/*,*/*;q=0.8",
		"Sec-Fetch-Dest" -> "image",
		"Sec-Fetch-Mode" -> "no-cors",
		"Sec-Fetch-Site" -> "same-origin")

	val headers_3 = Map(
		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
		"Sec-Fetch-Dest" -> "document",
		"Sec-Fetch-Mode" -> "navigate",
		"Sec-Fetch-Site" -> "cross-site",
		"Sec-Fetch-User" -> "?1",
		"Upgrade-Insecure-Requests" -> "1")

    val uri1 = "https://solid.community/authorize"

	val scn = scenario("RecordedSimulation")
		.exec(http("request_0")
			.get("/viade_es3a/addRoute")
			.headers(headers_0)
			.check(status.is(404)))
		.pause(29)
		.exec(http("request_1")
			.get("/viade_es3a/static/js/2.523c93b4.chunk.js.map")
			.headers(headers_1))
		.pause(19)
		.exec(http("request_2")
			.get("/viade_es3a/static/media/logo.52b12b95.svg")
			.headers(headers_2))
		.pause(6)
		.exec(http("request_3")
			.get(uri1 + "?scope=openid&client_id=c7b893b4e1c4448c429c6a342b586c27&response_type=id_token%20token&request=eyJhbGciOiJub25lIn0.eyJyZWRpcmVjdF91cmkiOiJodHRwczovL2FycXVpc29mdC5naXRodWIuaW8vdmlhZGVfZXMzYS8iLCJkaXNwbGF5IjoicGFnZSIsIm5vbmNlIjoiZ3l2LTFCRFdlYndrS1pIVEc0MnFSQWNLSnBfcjNDZ0tKV1kzREJNODViSSIsImtleSI6eyJhbGciOiJSUzI1NiIsImUiOiJBUUFCIiwiZXh0Ijp0cnVlLCJrZXlfb3BzIjpbInZlcmlmeSJdLCJrdHkiOiJSU0EiLCJuIjoidXdGVG9raU95UkZiQm1QOE1JVGxXcHFfNzBjcnJSZlh2eWs3OG1kQUdkSGJwYU9YYWxkZ05aX2Fia0xyUFBrc1ZEbjZTbi1KUFM2UFpVSnk0WmFyUVBSdlBuN3VGb3JBNzlzeXI0bjNFbUF3dDBMVEFLcDIxTzRYbXlfM2VpaF9XZ3FYTkhMVzgyaFJiOFJTUkVsTmN4cHVVZllHN3QyV19Da1hMN0JaT2pYN2pnSVJQYTQ2V1hZUk1nU3Vkay1ocWExRVVaNEx3UzZ5Mm9FTG9kNVdoZGFtZ2h1OWNXUUx2N0I4MUhFcllsQ1RZazNYOFN4SllfdGl3UWUyMWVfdU1vLVVpYWRob3lRRjVKRjJKZDhqaGtabXFXNm5tM2VReVJJTTQwa3JwQnd1aXY0YXVSeTRWWk8xZm9LeTEya29oMFBGUThkZi02TXEzb1NkaEo2VlVRIn19.&state=1KX768IaAhxsnrNgZACf6Z_bkZV31my2u1gAARpYALE")
			.headers(headers_3))
		.pause(1)
		.exec(http("request_4")
			.get(uri1 + "?scope=openid&client_id=c7b893b4e1c4448c429c6a342b586c27&response_type=id_token%20token&request=eyJhbGciOiJub25lIn0.eyJyZWRpcmVjdF91cmkiOiJodHRwczovL2FycXVpc29mdC5naXRodWIuaW8vdmlhZGVfZXMzYS8iLCJkaXNwbGF5IjoicGFnZSIsIm5vbmNlIjoiZ3l2LTFCRFdlYndrS1pIVEc0MnFSQWNLSnBfcjNDZ0tKV1kzREJNODViSSIsImtleSI6eyJhbGciOiJSUzI1NiIsImUiOiJBUUFCIiwiZXh0Ijp0cnVlLCJrZXlfb3BzIjpbInZlcmlmeSJdLCJrdHkiOiJSU0EiLCJuIjoidXdGVG9raU95UkZiQm1QOE1JVGxXcHFfNzBjcnJSZlh2eWs3OG1kQUdkSGJwYU9YYWxkZ05aX2Fia0xyUFBrc1ZEbjZTbi1KUFM2UFpVSnk0WmFyUVBSdlBuN3VGb3JBNzlzeXI0bjNFbUF3dDBMVEFLcDIxTzRYbXlfM2VpaF9XZ3FYTkhMVzgyaFJiOFJTUkVsTmN4cHVVZllHN3QyV19Da1hMN0JaT2pYN2pnSVJQYTQ2V1hZUk1nU3Vkay1ocWExRVVaNEx3UzZ5Mm9FTG9kNVdoZGFtZ2h1OWNXUUx2N0I4MUhFcllsQ1RZazNYOFN4SllfdGl3UWUyMWVfdU1vLVVpYWRob3lRRjVKRjJKZDhqaGtabXFXNm5tM2VReVJJTTQwa3JwQnd1aXY0YXVSeTRWWk8xZm9LeTEya29oMFBGUThkZi02TXEzb1NkaEo2VlVRIn19.&state=1KX768IaAhxsnrNgZACf6Z_bkZV31my2u1gAARpYALE")
			.headers(headers_3)
			.resources(http("request_5")
			.get("/viade_es3a/static/css/2.c7d360f5.chunk.css.map")
			.headers(headers_1),
            http("request_6")
			.get("/viade_es3a/static/js/2.523c93b4.chunk.js.map")
			.headers(headers_1)))

	 setUp(scn.inject(rampUsers(50) during(60 seconds))).
protocols(httpProtocol)
}