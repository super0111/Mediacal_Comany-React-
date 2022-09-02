import React
 from "react";
import UserLayout from "../components/UserLayout";

export default function Notification() {
	return (
		<>
			<UserLayout>
				<div className="content-wrapper-section">
					<div className="container-fluid">
						<div className="row">
							<div className="col-12">
								<div className="comn-title-main">
									<h1 className="mb-0">Notification</h1>
								</div>
							</div>
							<div className="col-xxl-10">
								<div className="dash-top-box">
									<div className="notification-main">
										<span>Today</span>
										<div className="notification-box">
											<div className="d-sm-flex d-block">
												<div className="time-note">2 Hours Ago</div>
												<div className="ms-sm-3">
													<div className="notification-name">Activity</div>
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
												</div>
											</div>
										</div>
										<div className="notification-box">
											<div className="d-sm-flex d-block">
												<div className="time-note">8 Hours Ago</div>
												<div className="ms-sm-3">
													<div className="notification-name">System Alert</div>
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
												</div>
											</div>
										</div>
									</div>
									<div className="notification-main mt-4">
										<span>Yesterday</span>
										<div className="notification-box">
											<div className="d-sm-flex d-block">
												<div className="time-note">11:30 PM</div>
												<div className="ms-sm-3">
													<div className="notification-name">Activity</div>
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
												</div>
											</div>
										</div>
										<div className="notification-box">
											<div className="d-sm-flex d-block">
												<div className="time-note">06:10 PM</div>
												<div className="ms-sm-3">
													<div className="notification-name">Activity</div>
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
												</div>
											</div>
										</div>
										<div className="notification-box">
											<div className="d-sm-flex d-block">
												<div className="time-note">5:30 PM</div>
												<div className="ms-sm-3">
													<div className="notification-name">Activity</div>
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
												</div>
											</div>
										</div>
										<div className="notification-box border-0">
											<div className="d-sm-flex d-block">
												<div className="time-note">01:30 PM</div>
												<div className="ms-sm-3">
													<div className="notification-name">Activity</div>
													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</UserLayout>
		</>
	);
}
