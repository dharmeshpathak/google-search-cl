<Box className="container search-page-data px-5">
      <Box className="row px-1">
        <div className="col-md-12 ">
          

          <div key={props.displayLink}>
            <a
              href={props.displayLink}
              className="font-weight-normal header-post text-dark text-decoration-none"
            >
              {props.displayLink}
                <i className="fa fa-angle-down ml-1"></i>
            </a>

            <h5 className="link-heading">
              <a
                href={props.formattedUrl}
                className="link-text"
                dangerouslySetInnerHTML={{ __html: props.htmlTitle }}
              />
            </h5>
            <p
              className="paragraph"
              dangerouslySetInnerHTML={{ __html: props.htmlSnippet }}
              style={{ color: "#666" }}
            />
          </div>
        </div>
      </Box>
    </Box>