
$(function ()
{
    // Verify Session
    let verify_session = () =>
    {
        // Wait animation
        let wait = new wtools.ElementState('#wait_animation_page', true, 'block', new wtools.WaitAnimation().for_page);

        // Request
        new wtools.Request(server_config.current.api + "/system/login", "POST").Exec_((response_data) =>
        {
            if(response_data.status != 200)
            {
                window.location.href = "../login/";
                return;
            }

            wait.Off_();
        });
    };
    verify_session();

    // Elements
        new Sidebars().SidebarMenu_();
        new Headers().Header_();
        new Footers().Footer_();
        new wtools.MenuManager('.sidebar_menu', true);
        new wtools.MenuManager('.nav_spaces');
        new wtools.MenuManager('.nav_reports_add');
        new wtools.MenuManager('.nav_reports_modify');
        
});